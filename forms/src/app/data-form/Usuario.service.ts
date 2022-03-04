import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Model/Usuario';

@Injectable
({
  providedIn: 'root'
})
export class UsuarioService {

baseUrl = `${environment.UrlPrincipal}/api/usuarios`; //template string

constructor(private http: HttpClient) { }

getAll(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(`${this.baseUrl}`);
}

getById(id: number): Observable<Usuario>{
return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
}

save(usuario: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>(`${this.baseUrl}`, usuario);
}



}
