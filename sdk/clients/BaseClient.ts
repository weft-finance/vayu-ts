import type { BaseServerConfiguration, Configuration, RequestContext, ResponseContext } from '../../openapi';
import { createConfiguration } from '../../openapi';

export abstract class BaseClient {
  constructor(
    protected readonly accessToken: string | undefined,
    private readonly baseServer: BaseServerConfiguration,
  ) {
  }

  protected get configuration(): Configuration {
    return createConfiguration({
      baseServer: this.baseServer,
      authMethods: {
        default: {
          getName: () => 'Logged In',
          applySecurityAuthentication: () => this.validateIsLoggedIn(this.accessToken),
        },
      },
      promiseMiddleware: [{
        pre: async (context: RequestContext) => {
          context.setHeaderParam('Authorization', `Bearer ${this.accessToken}`);

          return context;
        },
        post: async (context: ResponseContext) => (context),
      }],
    });
  }

  private validateIsLoggedIn(accessToken: string | undefined) {
    if (!accessToken) {
      throw new Error('Please login first');
    }
  }
}