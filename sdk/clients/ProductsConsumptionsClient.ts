import { ProductConsumptionsApi } from '../../openapi';
import { ConfigurationService } from '../services';
import type { PaginationOptions } from '../types';

export class ProductConsumptionsClient {
  private client: ProductConsumptionsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(ProductConsumptionsApi);
  }


  async get(id: string) {
    return this.client.getProductConsumption(id);
  }
}