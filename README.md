# Vayu API Client Library ![client version](https://img.shields.io/npm/v/vayu-ts?label=Latest%20Version)

## Overview

The Vayu API client library in TypeScript allows you to submit events for processing and storage, manage billing-related entities, and perform various other operations seamlessly.

## Installation

Install the Vayu API client library using npm:

```bash
npm i vayu-ts
```

## Usage

### Initialization

Initialize the Vayu API client. The `baseUrl` parameter is optional and defaults to Vayu's public API servers.

```typescript
import { Vayu } from 'vayu-ts';

const vayu = new Vayu(
  'your-access-token',
);
```

### Authentication

#### Login and authenticate

```typescript
await vayu.login();
```

### Events

#### Sending Events

To send a batch of events for processing and storage:

```typescript
const events: Event[] = [
  {
    name: 'api_call',  // The distinctive label assigned to an event
    timestamp: new Date().toISOString(),  // The exact moment of event occurrence in ISO 8601 format
    customerAlias: 'customer_12345',  // A unique identifier assigned to each customer
    ref: '4f6cf35x-2c4y-483z-a0a9-158621f77a21',  // A universally unique identifier for each event
    data: {
      key1: 'processing_duration',  // Example additional data
      key2: 'api_url'  // Example additional data
    }
  }
];

const response = await vayu.events.send(events);

console.log(response.validEvents);
console.log(response.invalidEvents);
```

#### Querying Events

To fetch events occurring within a specified timestamp range:

```typescript
const response = await vayu.events.query({
  startTime: '2023-09-01T00:00:00.000Z',
  endTime: '2023-09-30T23:59:59.999Z',
  eventName: 'api_call',
  limit: 10
});

console.log(response.events);
```

#### Getting Event by Ref ID

To get a specific event using its reference ID:

```typescript
const response = await vayu.events.get('4f6cf35x-2c4y-483z-a0a9-158621f77a21');

console.log(response.event);
```

#### Deleting Event by Ref ID

To delete a specific event using its reference ID:

```typescript
const response = await vayu.events.delete('4f6cf35x-2c4y-483z-a0a9-158621f77a21');

console.log(response.event);
```

### Customers

#### Creating a Customer

To create a new customer:

```typescript
const response = await vayu.customers.create({
  name: 'John Doe',
  alias: 'customer_12345'
});

console.log(response.customer);
```

#### Updating a Customer

To update an existing customer by ID:

```typescript
const response = await vayu.customers.update('customer-id', {
  name: 'Jane Doe',
  alias: 'customer_67890'
});

console.log(response.customer);
```

#### Deleting a Customer

To delete a customer by ID:

```typescript
const response = await vayu.customers.delete('customer-id');

console.log(response.customer);
```

### Meters

Meters are entities that track and aggregate usage data based on events. They are crucial for billing and monitoring purposes.

#### Listing Meters

To get a list of meters:

```typescript
const response = await vayu.meters.list({
  limit: 10,
  cursor: 'next-cursor'
});

console.log(response.meters);
console.log(response.total);
console.log(response.hasMore);
console.log(response.nextCursor);
```

## Features

The Vayu API client library provides access to the following features:

- **Auth**
  - `auth.login()`
- **Events**
  - `events.sendEvents()`
  - `events.queryEvents()`
  - `events.getEventByRefId()`
  - `events.deleteEventByRefId()`
  - `events.sendEventsDryRun()`
- **Customers**
  - `customers.createCustomer()`
  - `customers.updateCustomer()`
  - `customers.deleteCustomer()`
  - `customers.listCustomers()`
  - `customers.getCustomer()`
- **Meters**
  - `meters.getMeter()`
  - `meters.updateMeter()`
  - `meters.deleteMeter()`
  - `meters.listMeters()`
- **Plans**
  - `plans.getPlan()`
  - `plans.deletePlan()`
  - `plans.listPlans()`
- **Contracts**
  - `contracts.createContract()`
  - `contracts.deleteContract()`
  - `contracts.listContracts()`
  - `contracts.getContract()`
- **Invoices**
  - `invoices.getInvoice()`
  - `invoices.listInvoices()`

## Support

If you have any questions or need further assistance, please contact Vayu at `team@withvayu.com`.

## License

This project is licensed under the MIT License.

---

This README provides an overview and usage examples for the Vayu API client library. For more detailed information on each method, please refer to the official Vayu API documentation.