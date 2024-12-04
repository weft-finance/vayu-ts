import type { APIQueryPayloadAPIProduct, APICreateProductPayload, APIUpdateProductPayload, ReviseProductPayload } from '../../openapi-v2';
import { ProductsApi } from '../../openapi-v2';
import { ConfigurationService } from '../services';

export class ProductsClient {
  private client: ProductsApi;

  constructor() {
    this.client = ConfigurationService.instance.generateNewClient(ProductsApi);
  }

  async get(id: string) {
    return this.client.getProduct(id);
  }

  async create(payload: APICreateProductPayload) {
    return this.client.createProduct(payload);
  }

  async update(id: string, payload: APIUpdateProductPayload) {
    return this.client.updateProduct(payload, id);
  }

  async revise(id: string, payload: ReviseProductPayload) {
    return this.client.reviseAProduct(payload, id);
  }

  async delete(id: string) {
    return this.client.deleteProduct(id);
  }

  async query(query: APIQueryPayloadAPIProduct) {
    return this.client.queryProducts(query);
  }
}