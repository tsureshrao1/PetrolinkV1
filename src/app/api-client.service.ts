import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>{
    const url = "http://167.99.153.42:8080/petrolinkboot/petrolink/career";
    return this.httpClient.get<any>(url).pipe();
  }
}
