import type { CreateContractRequest } from '../../openapi';
import { ContractsApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class ContractsClient {
  private client: ContractsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(ContractsApi);
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