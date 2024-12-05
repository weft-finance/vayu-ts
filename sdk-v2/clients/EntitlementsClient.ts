import type { APIQueryPayloadAPIEntitlement } from '../../openapi-v2';
import { EntitlementsApi } from '../../openapi-v2';
import { ConfigurationService } from '../services';

export class EntitlementsClient {
  private client: EntitlementsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(EntitlementsApi);
  }

  async get(id: string) {
    return this.client.getEntitlement(id);
  }

  async delete(id: string) {
    return this.client.deleteEntitlement(id);
  }

  async query(query: APIQueryPayloadAPIEntitlement) {
    return this.client.queryEntitlements(query);
  }
}