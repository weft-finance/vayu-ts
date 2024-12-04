import type { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import type { BaseServerConfiguration, Configuration, RequestContext, ResponseContext } from '../../openapi-v2';
import { createConfiguration, ServerConfiguration, AuthenticationApi } from '../../openapi-v2';

const EXPIRATION_THRESHOLD = 1000 * 60 * 5;
const BASE_URLS_MAP = new Map<string, BaseServerConfiguration>([
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
    const baseServer = BASE_URLS_MAP.get(baseUrl ?? '');

    return baseServer ?? new ServerConfiguration<{}>(baseUrl ?? '', {});
  }

  private accessToken: string | undefined;
  private expiresAt: number;

  constructor(
    private apiKey: string,
    private baseServer: BaseServerConfiguration,
  ) {
    this.expiresAt = Date.now();
  }

  generateNewClient<T extends { new(config: Configuration): InstanceType<T> }>(ClientClass: T): InstanceType<T> {
    this.validateIsLoggedIn();

    const newClient = new ClientClass(this.configuration);

    return newClient;
  }

  async generateToken() {
    const authClient = new AuthenticationApi(createConfiguration({
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

    this.expiresAt = decodedJWT.exp ?? Date.now() + 1000 * 60 * 15;

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

          return context;
        },
        post: async (context: ResponseContext) => (context),
      }],
    });
  }
}