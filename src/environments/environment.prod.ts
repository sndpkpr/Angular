// export const environment = {
//   production: true
// };

import { InjectionToken, Injector, enableProdMode } from '@angular/core';
export class Environment {
  production = true;
  isSecure = true;
  baseUrl = 'prod.server.com';
  port = 443;
}

const injector = Injector.create([
  { provide: Environment, useClass: Environment, deps: [] }
]);

export const environment: Environment = injector.get(Environment);

// Remove all console messages
console.log = function() {};
