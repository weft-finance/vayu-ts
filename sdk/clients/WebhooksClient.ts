import type { WebhookSubscribeRequest } from '../../openapi';
import { NotificationEventType, WebhooksApi } from '../../openapi';
import { ConfigurationService } from '../services';

export class WebhooksClient {
  private client: WebhooksApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(WebhooksApi);
  }

  subscribeToOverage(callbackUrl: string) {
    return this.subscribe({
      callbackUrl,
      eventType: NotificationEventType.Overage,
    });
  }

  subscribeToAnonymousCustomerCreated(callbackUrl: string) {
    return this.subscribe({
      callbackUrl,
      eventType: NotificationEventType.AnonymousCustomer,
    });
  }

  private async subscribe(payload: WebhookSubscribeRequest) {
    return this.client.webhookSubscribe(payload);
  }
}