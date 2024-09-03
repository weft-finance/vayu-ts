import type { BaseServerConfiguration, Event } from '../../openapi';
import { EventsApi } from '../../openapi';
import type { PaginationOptions } from '../types';
import { BaseClient } from './BaseClient';

export class EventsClient extends BaseClient {
  private client: EventsApi;

  constructor(accessToken: string | undefined, baseServer: BaseServerConfiguration) {
    super(accessToken, baseServer);
    this.client = new EventsApi(this.configuration);
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