import { PlansApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class PlansClient {
  private client: PlansApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(PlansApi);
  }

  async list(pagination?: PaginationOptions) {
    const cursor = pagination?.cursor;
    const limit = pagination?.limit;

    return this.client.listPlans(limit, cursor);
  }

  async get(id: string) {
    return this.client.getPlan(id);
  }

  async delete(id: string) {
    return this.client.deletePlan(id);
  }
}