import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ControlUsuariosService {

    constructor(private http: HttpClient) { }

    crearUsuario(usuario: Object): Observable<any> {
        console.log(usuario);
        return this.http.post('http://127.0.0.1:3000/usuarios', usuario);
        
        
    }
}
