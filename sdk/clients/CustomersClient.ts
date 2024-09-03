import type { BaseServerConfiguration, CreateCustomerRequest, UpdateCustomerRequest } from '../../openapi';
import { CustomersApi } from '../../openapi';
import type { PaginationOptions } from '../types';
import { BaseClient } from './BaseClient';

export class CustomersClient extends BaseClient {
  private client: CustomersApi;

  constructor(accessToken: string | undefined, baseServer: BaseServerConfiguration) {
    super(accessToken, baseServer);
    this.client = new CustomersApi(this.configuration);
  }

  async list(paginationOptions?: PaginationOptions) {
    const cursor = paginationOptions?.cursor;
    const limit = paginationOptions?.limit;

    return this.client.listCustomers(limit, cursor);
  }

  async get(id: string) {
    return this.client.getCustomer(id);
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
}