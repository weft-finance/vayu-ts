import { InvoicesApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class InvoicesClient {
  private client: InvoicesApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(InvoicesApi);
  }

  async list(pagination?: PaginationOptions) {
    const cursor = pagination?.cursor;
    const limit = pagination?.limit;

    return this.client.listInvoices(limit, cursor);
  }

  async get(id: string) {
    return this.client.getInvoice(id);
  }
}