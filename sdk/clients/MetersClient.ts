import type { UpdateMeterRequest } from '../../openapi';
import { MetersApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class MetersClient {
  private client: MetersApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(MetersApi);
  }

  async list(pagination?: PaginationOptions) {
    const cursor = pagination?.cursor;
    const limit = pagination?.limit;

    return this.client.listMeters(limit, cursor);
  }

  async get(id: string) {
    return this.client.getMeter(id);
  }

  async update(id: string, payload: UpdateMeterRequest) {
    return this.client.updateMeter(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteMeter(id);
  }
}