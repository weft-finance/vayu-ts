import type { APIQueryPayloadAPICustomer, APICreateCustomerPayload, APIUpdateCustomerPayload } from '../../openapi-v2';
import { CustomersApi } from '../../openapi-v2';
import { ConfigurationService } from '../services';

export class CustomersClient {
  private client: CustomersApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(CustomersApi);
  }

  async get(id: string) {
    return this.client.getCustomer(id);
  }

  async create(payload: APICreateCustomerPayload) {
    return this.client.createCustomer(payload);
  }

  async update(id: string, payload: APIUpdateCustomerPayload) {
    return this.client.updateCustomer(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteCustomer(id);
  }
  
  async query(payload: APIQueryPayloadAPICustomer) {
    return this.client.queryCustomers(payload);
  }
}