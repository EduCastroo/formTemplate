import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Attachments } from '../Model/Attachments';

@Injectable({
  providedIn: 'root'
})
export class AzureBlobStorageService {

  // Enter your storage account name
  azureAccount = "sigsblobs";
  // // container name
  // azureContainer = "geral";

  // sas = "sp=racwdl&st=2021-08-10T13:20:51Z&se=2022-01-01T21:20:51Z&spr=https&sv=2020-08-04&sr=c&sig=sgbX8GIG0ZqsiHr%2BE1BTBDtKQ0Ks%2BGotlJNXmrDqYRE%3D";

constructor(private http: HttpClient) { }

  public uploadFile(content: Blob, name: string, handler: () => void) {
    this.uploadBlob(content, name, this.containerClient(), handler)
  }

  private uploadBlob(content: Blob, name: string, client: ContainerClient, handler: () => void) {
    let blockBlobClient = client.getBlockBlobClient(name);
    blockBlobClient.uploadData(content, { blobHTTPHeaders: { blobContentType: content.type } })
      .then(() => handler())
  }

  private containerClient(): ContainerClient {
    return new BlobServiceClient(`https://${this.azureAccount}.blob.core.windows.net?${environment.azureBlobContainerSAS}`)
      .getContainerClient(environment.azureBlobContainer);
  }

  public getFinalURL(filename: string){
    return `https://${this.azureAccount}.blob.core.windows.net/${environment.azureBlobContainer}/${filename}`;
  }

}

