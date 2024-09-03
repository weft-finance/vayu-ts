import type { BaseServerConfiguration } from '../../openapi';
import { InvoicesApi } from '../../openapi';
import type { PaginationOptions } from '../types';
import { BaseClient } from './BaseClient';

export class InvoicesClient extends BaseClient {
  private client: InvoicesApi;

  constructor(accessToken: string | undefined, baseServer: BaseServerConfiguration) {
    super(accessToken, baseServer);
    this.client = new InvoicesApi(this.configuration);
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