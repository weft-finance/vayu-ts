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
    apiKey: string,
    baseUrl?: string,
  ) {
    const baseServer = ConfigurationService.generateServerConfiguration(baseUrl);
    this.configurationManager = ConfigurationService.initialize(apiKey, baseServer);
  }

  async login() {
    await this.configurationManager.generateToken();
  }

  get events() {
    return new EventsClient();
  }

  get customers() {
    return new CustomersClient();
  }

  get meters() {
    return new MetersClient();
  }

  get plans() {
    return new PlansClient();
  }

  get contracts() {
    return new ContractsClient();
  }

  get invoices() {
    return new InvoicesClient();
  }
}

export * from './types';
