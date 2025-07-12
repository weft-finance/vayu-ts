import type { CreateCustomerRequest, UpdateCustomerRequest } from '../../openapi';
import { CustomersApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class CustomersClient {
  private client: CustomersApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(CustomersApi);
  }

  async list(paginationOptions?: PaginationOptions) {
    const cursor = paginationOptions?.cursor;
    const limit = paginationOptions?.limit;

    return this.client.listCustomers(limit, cursor);
  }

  async get(id: string) {
    return this.client.getCustomer(id);
  }

  async getByExternalId(externalId: string) {
    return this.client.getCustomerByExternalId(externalId);
  }

  async create(payload: CreateCustomerRequest) {
    return this.client.createCustomer(payload);
  }

  async update(id: string, payload: UpdateCustomerRequest) {
    return this.client.updateCustomer(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteCustomer(id);
  }

  async listCustomerProductsConsumptions(id: string) {
    return this.client.getCustomerProductsConsumptions(id);
  }
}