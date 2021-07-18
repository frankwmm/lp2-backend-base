import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MateriasService {

  httpHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };

  endPoint = 'asignaturas/';

  constructor(private httpClient: HttpClient) { 

  }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}`;
    }
    return throwError(msg);
  }


  public getMateriassss(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

 

  public deleteMateriasssss(id: number): Observable<any> {

    return this.httpClient.delete(`${environment.url}${this.endPoint}${id}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }


  public saveAsignatura(params): Observable<any> {

    return this.httpClient.post(`${environment.url}${this.endPoint}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

  public getMateriaById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}${id}`, this.httpHeaders)
    .pipe(retry(1),
      catchError(this.httpError));

  }

  public updateAsignatura(id: number, params): Observable<any> {
    return this.httpClient.put(`${environment.url}${this.endPoint}${id}`, params, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

}
