import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Attachments } from '../Model/Attachments';

@Injectable({
  providedIn: 'root'
})
export class AttachmentService {

  baseUrl = `${environment.UrlPrincipal}/api/dilligence/Attachment`;

  constructor(private http: HttpClient) { }

  deleteAttachment(id: number): Observable<Attachments>{
    return this.http.delete<Attachments>(`${this.baseUrl}/${id}`);
    }

}
