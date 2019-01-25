import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface RequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: any | 'json';
  withCredentials?: boolean;
  body?: any;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(public http: HttpClient) { }

  public get<T>(url: string, options?: RequestOptions): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${url}`, options)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return throwError(err);
        }));
  }
}


export function httpServiceCreator(http: HttpClient) {
  return new HttpService(http);
}
