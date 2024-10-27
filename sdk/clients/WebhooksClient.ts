import type { WebhookSubscribeRequest } from '../../openapi';
import { WebhooksApi } from '../../openapi';
import { ConfigurationService } from '../services';

export class WebhooksClient {
  private client: WebhooksApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(WebhooksApi);
  }

  async subscribe(payload: WebhookSubscribeRequest) {
    return this.client.webhookSubscribe(payload);
  }
}