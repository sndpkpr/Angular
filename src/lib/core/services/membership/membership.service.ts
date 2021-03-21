import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie';

import { ApiService } from '../api/api.service';
import { CoreAPIURLs } from '../../config/constant';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private http: HttpClient, private apiservice: ApiService, private router: Router,
    // private cookie: CookieService
    ) { }

    login(body: {}) {
      // logic for login
      return this.apiservice.postData(CoreAPIURLs.loginUrl, body, null)
        .pipe(map((res: any) => {
          if (res && res.status === 200) {
            return res;
            // return this.getUserByName('api/Account/GetuserDetailsByUserName',body);
          }
        }));
    }

    logout() {
      this.removeCredentials();
      this.router.navigate(['/home/global/companylogin']);
    }

    isLoggedIn(): boolean {
      return this.apiservice.getToken() ? true : false;
    }

    setCookie(key: string, value: string) {
      this.cookie.put(key, value);
    }

    getUserDetails(key: string) {
      const userDetails = this.cookie.getObject('userdetails');
      if (userDetails === undefined) { return ''; } else { return userDetails[key]; }
    }

    // getCookieObject(key: string): IMembershipModel {
    //   const obj = this.cookie.getObject(key);
    //   if (obj === undefined) { return {}; } else {
    //     return obj;
    //   }
    // }

    getAllCookies(): {} {
      return this.cookie.getAll();
    }

    removeCredentials() {
      this.cookie.remove('userdetails');
      this.cookie.remove('token');
      this.cookie.remove('repository');
      // this.cookie.remove('NZcookieObj');
      localStorage.clear();
    }

    getCookie(key: string) {
      return this.cookie.get(key);
    }
}
