import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ControlAnunciosService {
  //Usuarios: Array[Object];
  constructor(private http: HttpClient) {}

  //Peticion que nos devuelve el listado de usuario mas populares.

  getUsers(): Observable<any> {
    let token = 'Beare eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbGFzaWZpY2Fkb3MuY29tIiwic3ViIjo3LCJpYXQiOjE1NDUxNTc4MzMsImV4cCI6MTU0NTc2MjYzM30.105e66tuI70e1WU7TVmQOt58FbkDaG9wyasTYxApjKg';
    return this.http.get<any>('http://127.0.0.1:3000/productos/todos/', {
      headers: new HttpHeaders().set('autorizacion', token)
    });
  }

}
