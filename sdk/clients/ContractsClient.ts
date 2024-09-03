import type { BaseServerConfiguration, CreateContractRequest } from '../../openapi';
import { ContractsApi } from '../../openapi';
import type { PaginationOptions } from '../types';
import { BaseClient } from './BaseClient';

export class ContractsClient extends BaseClient {
  private client: ContractsApi;

  constructor(accessToken: string | undefined, baseServer: BaseServerConfiguration) {
    super(accessToken, baseServer);
    this.client = new ContractsApi(this.configuration);
  }

  async list(pagination?: PaginationOptions) {
    const cursor = pagination?.cursor;
    const limit = pagination?.limit;

    return this.client.listContracts(limit, cursor);
  }

  async get(id: string) {
    return this.client.getContract(id);
  }

  async create(payload: CreateContractRequest) {
    return this.client.createContract(payload);
  }

  async delete(id: string) {
    return this.client.deleteContract(id);
  }
}