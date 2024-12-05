import { CustomersClient,
  EventsClient,
  InvoicesClient,
  ProductsClient } from './clients';
import { ConfigurationService } from './services';

export class Vayu {
  private configurationManager: ConfigurationService;

  constructor(
    apiKey: string,
    _baseUrl?: string,
  ) {
    // const baseServer = ConfigurationService.generateServerConfiguration('http://connect.v2.dev.withvayu.com');
    const baseServer = ConfigurationService.generateServerConfiguration('http://localhost:3000');
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

  get products() {
    return new ProductsClient();
  }

  get invoices() {
    return new InvoicesClient();
  }
}

export * from './types';
