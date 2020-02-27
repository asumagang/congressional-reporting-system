import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private httpClient:HttpClient) { }

  DownloadFile(filePath: string, fileType:string): Observable<any>{
    let fileExtension = fileType;
    let input = filePath;
    return this.httpClient.post("http://localhost:21021/api/services/app/FormAttachment/DownloadFile?fileName="+input, '',
    { responseType: ResponseContentType.Blob })
    .map(
      (res) => {
            var blob = new Blob([res.blob()], {type: fileExtension} )
            return blob;            
      });
  }
}
