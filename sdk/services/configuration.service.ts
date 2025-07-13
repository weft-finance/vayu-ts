import type { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import type { BaseServerConfiguration, Configuration, RequestContext, ResponseContext } from '../../openapi';
import { AuthApi, createConfiguration, server1, server2, ServerConfiguration } from '../../openapi';
import { getRequiredEnvVar } from '../utils';

const VAYU_CLIENT_ID_ENV_VAR_NAME = 'VAYU_CLIENT_ID';
const EXPIRATION_THRESHOLD = 1000 * 60 * 5;
const BASE_URLS_MAP = new Map<string, BaseServerConfiguration>([
  ['https://connect.withvayu.com', server1],
  ['https://staging-connect.withvayu.com', server2],
]);

/* eslint-disable no-underscore-dangle */
export class ConfigurationService {
  private static _instance: ConfigurationService | null = null;

  static get instance(): ConfigurationService {
    if (!ConfigurationService._instance) {
      throw new Error('ConfigurationService not initialized');
    }

    return ConfigurationService._instance;
  }

  static initialize(apiKey: string, baseServer: BaseServerConfiguration) {
    if (ConfigurationService._instance) {
      throw new Error('ConfigurationService already initialized');
    }

    ConfigurationService._instance = new ConfigurationService(apiKey, baseServer);

    return ConfigurationService._instance;
  }

  static generateServerConfiguration(baseUrl?: string): BaseServerConfiguration {
    if (!baseUrl) {
      return server1;
    }

    const baseServer = BASE_URLS_MAP.get(baseUrl);

    return baseServer ?? new ServerConfiguration<{}>(baseUrl, {});
  }

  private accessToken: string | undefined;
  private clientId: string;
  private expiresAt: number;

  constructor(
    private apiKey: string,
    private baseServer: BaseServerConfiguration,
  ) {
    this.expiresAt = Date.now();
    this.clientId = getRequiredEnvVar(VAYU_CLIENT_ID_ENV_VAR_NAME);
  }

  generateNewClient<T extends { new(config: Configuration): InstanceType<T> }>(ClientClass: T): InstanceType<T> {
    this.validateIsLoggedIn();

    const newClient = new ClientClass(this.configuration);

    return newClient;
  }

  async generateToken() {
    const authClient = new AuthApi(createConfiguration({
      baseServer: this.baseServer,
    }));

    const login = await authClient.login({
      refreshToken: this.apiKey,
    });

    this.accessToken = login.accessToken;

    const decodedJWT = jwt.decode(this.accessToken) as JwtPayload;

    if (!decodedJWT) {
      throw new Error('Invalid JWT token');
    }

    this.expiresAt = (decodedJWT.exp ?? Math.floor(Date.now() / 1000) + 60 * 15) * 1000;

    return {
      accessToken: login.accessToken,
      expiresAt: decodedJWT.exp,
    };
  }

  validateIsLoggedIn() {
    if (!this.accessToken) {
      throw new Error('Please login first');
    }
  }

  private get configuration(): Configuration {
    return createConfiguration({
      baseServer: this.baseServer,
      authMethods: {
        default: {
          getName: () => 'Logged In',
          applySecurityAuthentication: () => this.validateIsLoggedIn(),
        },
      },
      promiseMiddleware: [{
        pre: async (context: RequestContext) => {
          if (this.expiresAt <= Date.now() + EXPIRATION_THRESHOLD) {
            await this.generateToken();
          }

          context.setHeaderParam('Authorization', `Bearer ${this.accessToken}`);
          context.setHeaderParam('x-api-key', this.clientId);

          return context;
        },
        post: async (context: ResponseContext) => (context),
      }],
    });
  }
}