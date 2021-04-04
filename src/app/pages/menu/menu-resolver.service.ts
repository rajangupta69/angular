import {Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Items, Menu } from './menu.model';

@Injectable()
export class MenuListResolver implements Resolve<Map<string, Items>>{
  constructor(private svc: Menu) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Map<string, Items>> {
    return this.svc.list();
  }
}


