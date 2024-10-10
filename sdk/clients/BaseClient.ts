import type { Configuration } from '../../openapi';
import { ConfigurationService } from '../services';

export abstract class BaseClient {
  protected get configuration(): Configuration {
    return ConfigurationService.instance.configuration;
  }
}