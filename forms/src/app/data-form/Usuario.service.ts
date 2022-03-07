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
  return this.http.get<Usuario[]>(this.baseUrl);
}

getById(id: number): Observable<Usuario>{
return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
}

save(usuario: Usuario){
  // debugger;
  return this.http.post(this.baseUrl, usuario);
}



}
