import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
 HOST_NAME = "http://139.59.85.190:8090/petrolinkboot/";
  //HOST_NAME = "http://localhost:8090/petrolinkboot/";
  constructor(private httpClient:HttpClient) {
    
  }

  getJopOpenings():Observable<any>{
    return this.httpClient.get<any>(this.HOST_NAME+"petrolink/career").pipe();
  }

  applyJob(data:FormData):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+"petrolink/profile",data).pipe();
  }
  applyJobDirect(data:FormData):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+"petrolink/directProfile",data).pipe();
  }


  login(data):Observable<any>{
    return this.httpClient.post<any>(this.HOST_NAME+"petrolink/admin/user",data).pipe();
  }
}
