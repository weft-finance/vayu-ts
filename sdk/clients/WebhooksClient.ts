import crypto from 'crypto';
import type { WebhookSubscribeRequest } from '../../openapi';
import { NotificationEventType, WebhooksApi } from '../../openapi';
import { PUBLIC_WEBHOOK_KEY } from '../consts/public-webhook-key';
import { ConfigurationService } from '../services';

export class WebhooksClient {
  private client: WebhooksApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(WebhooksApi);
  }

  verifyWebhookSignature({
    payload,
    timestamp,
    signature,
    tolerance = 300,
  }: {
    payload: string;
    timestamp: number;
    signature: string;
    tolerance?: number;
  }): boolean {
    const now = Math.floor(Date.now() / 1000);
    if (Math.abs(now - timestamp) > tolerance) return false;
  
    const message = `${timestamp}.${JSON.stringify(payload)}`;
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(message);
    verifier.end();
  
    return verifier.verify(PUBLIC_WEBHOOK_KEY, signature, 'base64');
  }

  subscribeToCommitmentCrossed(callbackUrl: string) {
    return this.subscribe({
      callbackUrl,
      eventType: NotificationEventType.CommitmentCrossed,
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
