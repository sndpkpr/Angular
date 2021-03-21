import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie';

// import { environment } from '../../../environments/environment';
// import { ErrorHandlerService } from '../error-handler/error-handler.service';
// import { ApiParams } from '../api-service/view-model/api-params';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, 
    // private cookie: CookieService, private errorhandler: ErrorHandlerService
    ) { }

  // getData(url: string, reqAPIParams: ApiParams[] | null) {
  //   let newHTTPParams = new HttpParams();
  //   if (reqAPIParams != null) {
  //     reqAPIParams.forEach(element => {
  //       newHTTPParams = newHTTPParams.append(element.Key, element.Value);
  //     });
  //   }
  //   return this.http.get(this.getUrl(url), { params: newHTTPParams, observe: 'response' }).pipe(
  //     catchError(this.handleError)
  //   );
  // }


  // postData<T>(url: string, data: {}, reqAPIParams: ApiParams[]) {
  //   let newHTTPParams = new HttpParams();
  //   if (reqAPIParams != null) {
  //     reqAPIParams.forEach(element => {
  //       newHTTPParams = newHTTPParams.append(element.Key, element.Value);
  //     });
  //   }
  //   return this.http.post<T>(this.getUrl(url), data, { params: newHTTPParams, observe: 'response' }).pipe(
  //     catchError(this.handleError)
  //     );
  // }


  // public handleError = (error: Response) => {
  //   // Do messaging and error handling here
  //   this.errorhandler.handleError(error.status);
  //   return Observable.throw(error);
  // }

  // private getUrl(url: string): string {
  //   return environment.baseUrl + url;
  // }

  getToken(): string {
    const token = '';
    // const token = this.cookie.get('token') ? this.cookie.get('token') : '';
    return token;
  }







}
