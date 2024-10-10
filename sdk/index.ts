import { ContractsClient,
  CustomersClient,
  EventsClient,
  InvoicesClient,
  MetersClient,
  PlansClient } from './clients';
import { ConfigurationService } from './services';

export class Vayu {
  private configurationManager: ConfigurationService;

  constructor(
    private readonly apiKey: string,
    baseUrl?: string,
  ) {
    const baseServer = ConfigurationService.generateServerConfiguration(baseUrl);
    this.configurationManager = ConfigurationService.initialize(apiKey, baseServer);
  }

  async login() {
    await this.configurationManager.generateToken();
  }

  get events() {
    this.validateIsLoggedIn();

    return new EventsClient();
  }

  get customers() {
    this.validateIsLoggedIn();

    return new CustomersClient();
  }

  get meters() {
    this.validateIsLoggedIn();

    return new MetersClient();
  }

  get plans() {
    this.validateIsLoggedIn();

    return new PlansClient();
  }

  get contracts() {
    this.validateIsLoggedIn();

    return new ContractsClient();
  }

  get invoices() {
    this.validateIsLoggedIn();

    return new InvoicesClient();
  }

  private validateIsLoggedIn() {
    this.configurationManager.validateIsLoggedIn();
  }
}

export * from './types';
