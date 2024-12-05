import type { APIQueryPayloadAPIEvent, APIIngestEventPayload } from '../../openapi-v2';
import { EventsApi } from '../../openapi-v2';
import { ConfigurationService } from '../services';

export class EventsClient {
  private client: EventsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(EventsApi);
  }

  async get(id: string) {
    return this.client.getEvent(id);
  }

  async delete(id: string) {
    return this.client.deleteEvent(id);
  }

  async query(query: APIQueryPayloadAPIEvent) {
    return this.client.queryEvents(query);
  }

  async ingest(payload: APIIngestEventPayload[]) {
    return this.client.ingestEventToTheSystem(payload);
  }
}