import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  httpHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };
  
  listUserApi='listausuarios/';
  modificaEstado='actualizaEstado/';


  constructor(private httpClient: HttpClient) { }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}`;
    }
    return throwError(msg);
  }
  
  public getUsuarios(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.listUserApi}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }


  public actualizaEstadoUsuario(id: number): Observable<any> {

    return this.httpClient.put(`${environment.url}${this.modificaEstado}${id}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }

}
