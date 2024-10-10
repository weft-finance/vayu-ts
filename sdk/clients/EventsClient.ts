import type { Event } from '../../openapi';
import { EventsApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class EventsClient {
  private client: EventsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(EventsApi);
  }

  async get(ref: string) {
    return this.client.getEventByRefId(ref);
  }

  async delete(ref: string) {
    return this.client.deleteEventByRefId(ref);
  }

  async query(startTime: Date, endTime: Date, eventName: string, paginationOptions?: PaginationOptions) {
    const cursor = paginationOptions?.cursor;
    const limit = paginationOptions?.limit;

    return this.client.queryEvents(startTime, endTime, eventName, limit, cursor);
  }

  async send(events: Event[]) {
    return this.client.sendEvents(
      { events },
    );
  }

  async dryRun(events: Event[]) {
    return this.client.sendEventsDryRun({
      events,
    });
  }
}