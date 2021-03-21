import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { MembershipService } from '../membership/membership.service';
import { ApiService } from '../api/api.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }
// }
/**
 * token not present - @return true
 */
export class AnonymousGuard implements CanActivate {
  constructor(private router: Router, private membershipservice: MembershipService, private apiservice: ApiService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.apiservice.getToken();
    if (token) {
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}

/**
 * token present - @return true
 */
 export class AnonymousGuard2 implements CanActivate {
  constructor(private router: Router, private membershipservice: MembershipService, private apiservice: ApiService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.apiservice.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}

/**
 * token correct of user
 */
 @Injectable()
 export class AuthenticatedUser implements CanActivate {
   constructor(private router: Router, private membershipservice: MembershipService, private apiservice: ApiService) { }
   canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     const token = this.apiservice.getToken();
     if (token) {
       return true;
     } else {
       this.router.navigate(['/dashboard']);
       return false;
     }
   }
 }

 /**
 * token correct of admin
 */
@Injectable()
export class AuthenticatedAdmin implements CanActivate {
  constructor(private router: Router, private membershipservice: MembershipService, private apiservice: ApiService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.apiservice.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}