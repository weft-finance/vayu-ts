import { PlansApi } from '../../openapi';
import type { PaginationOptions } from '../types';
import { BaseClient } from './BaseClient';

export class PlansClient extends BaseClient {
  private client: PlansApi;

  constructor() {
    super();
    this.client = new PlansApi(this.configuration);
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