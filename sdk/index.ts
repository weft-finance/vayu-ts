import type { BaseServerConfiguration } from '../openapi';
import { AuthApi, createConfiguration, server1, server2 } from '../openapi';
import { ContractsClient,
  CustomersClient,
  EventsClient,
  InvoicesClient,
  MetersClient,
  PlansClient } from './clients';

const BASE_URLS_MAP = new Map<string, BaseServerConfiguration>([
  ['https://connect.withvayu.com', server1],
  ['https://staging-connect.withvayu.com', server2],
]);

export class Vayu {
  private accessToken: string | undefined;
  private baseServer: BaseServerConfiguration;

  private authClient: AuthApi;
  private contractsClient: ContractsClient | null;
  private customersClient: CustomersClient | null;
  private eventsClient: EventsClient | null;
  private invoicesClient: InvoicesClient | null;
  private metersClient: MetersClient | null;
  private plansClient: PlansClient | null;

  constructor(
    private readonly apiKey: string,
    baseUrl?: string,
  ) {
    this.baseServer = this.validateBaseUrl(baseUrl);
    this.authClient = new AuthApi(createConfiguration({
      baseServer: this.baseServer,
    }));
    this.contractsClient = null;
    this.customersClient = null;
    this.eventsClient = null;
    this.invoicesClient = null;
    this.metersClient = null;
    this.plansClient = null;
  }

  async login() {
    if (this.accessToken) {
      return;
    }

    const login = await this.authClient.login({
      refreshToken: this.apiKey,
    });

    this.accessToken = login.accessToken;

    this.generateClients();
  }

  get events() {
    this.validateIsLoggedIn(this.accessToken);

    return this.eventsClient!;
  }

  get customers() {
    this.validateIsLoggedIn(this.accessToken);

    return this.customersClient!;
  }

  get meters() {
    this.validateIsLoggedIn(this.accessToken);

    return this.metersClient!;
  }

  get plans() {
    this.validateIsLoggedIn(this.accessToken);

    return this.plansClient!;
  }

  get contracts() {
    this.validateIsLoggedIn(this.accessToken);

    return this.contractsClient!;
  }

  get invoices() {
    this.validateIsLoggedIn(this.accessToken);

    return this.invoicesClient!;
  }

  private validateIsLoggedIn(token: string | undefined): asserts token is string {
    if (!token) {
      throw new Error('Vayu client is not logged in. please call `vayu.login()` before calling this method');
    }
  }

  private generateClients() {
    this.validateIsLoggedIn(this.accessToken);
    this.contractsClient = new ContractsClient(this.accessToken, this.baseServer);
    this.customersClient = new CustomersClient(this.accessToken, this.baseServer);
    this.eventsClient = new EventsClient(this.accessToken, this.baseServer);
    this.invoicesClient = new InvoicesClient(this.accessToken, this.baseServer);
    this.metersClient = new MetersClient(this.accessToken, this.baseServer);
    this.plansClient = new PlansClient(this.accessToken, this.baseServer);
  }

  private validateBaseUrl(baseUrl?: string): BaseServerConfiguration {
    if (!baseUrl) {
      return server1;
    }

    const baseServer = BASE_URLS_MAP.get(baseUrl);

    if (!baseServer) {
      throw new Error(`Invalid baseUrl: ${baseUrl}`);
    }

    return baseServer;
  }
}

export * from './types';
