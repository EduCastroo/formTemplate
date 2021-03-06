import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dilligence } from '../Model/Dilligence';

@Injectable
({
  providedIn: 'root'
})
export class DilligenceService {

baseUrl = `${environment.UrlPrincipal}/api/dilligence/dilligence`; //template string

constructor(private http: HttpClient) { }

getAll(): Observable<Dilligence[]> {
  return this.http.get<Dilligence[]>(this.baseUrl);
}

getById(id: number): Observable<Dilligence>{
return this.http.get<Dilligence>(`${this.baseUrl}/${id}`);
}

save(dilligence: Dilligence){
  return this.http.post(this.baseUrl, dilligence);
}

update(dilligence: Dilligence){
  return this.http.put(this.baseUrl, dilligence);
}

downloadPDF(id: number): any {
    return this.http.post(`${this.baseUrl}/pdf/${id}`, {}, { responseType: 'blob' });
  }

consultaCnpj(cnpj: string){
  return this.http.get(`${this.baseUrl}/cnpj/${cnpj}`);
}

consultaCEP(cep: string){
  return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
}

}
