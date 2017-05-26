import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router, Route } from '@angular/router';

@Injectable()
export class DemoResolve implements Resolve<Promise<any>> {

  constructor() {}
  resolve() {
    return Promise.resolve(true);
  }
}
