import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Partner } from '../Model/Partner';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  baseUrl = `${environment.UrlPrincipal}/api/dilligence/Partner`;

  constructor(private http: HttpClient) { }

  deletePartner(id: number): Observable<Partner>{
    return this.http.delete<Partner>(`${this.baseUrl}/${id}`);
    }

}

