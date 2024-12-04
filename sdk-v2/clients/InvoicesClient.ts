import type { APIQueryPayloadAPIInvoice, APICreateInvoicePayload, APIUpdateInvoicePayload } from '../../openapi-v2';
import { InvoicesApi } from '../../openapi-v2';
import { ConfigurationService } from '../services';

export class InvoicesClient {
  private client: InvoicesApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(InvoicesApi);
  }

  async get(id: string) {
    return this.client.getInvoice(id);
  }

  async create(payload: APICreateInvoicePayload) {
    return this.client.createInvoice(payload);
  }

  async update(id: string, payload: APIUpdateInvoicePayload) {
    return this.client.updateInvoice(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteInvoice(id);
  }

  async query(payload: APIQueryPayloadAPIInvoice) {
    return this.client.queryInvoices(payload);
  }

  async calculate(id: string) {
    return this.client.calculateInvoice(id);
  }
}