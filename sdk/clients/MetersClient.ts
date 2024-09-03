import type { BaseServerConfiguration, UpdateMeterRequest } from '../../openapi';
import { MetersApi } from '../../openapi';
import type { PaginationOptions } from '../types';
import { BaseClient } from './BaseClient';

export class MetersClient extends BaseClient {
  private client: MetersApi;

  constructor(accessToken: string | undefined, baseServer: BaseServerConfiguration) {
    super(accessToken, baseServer);
    this.client = new MetersApi(this.configuration);
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