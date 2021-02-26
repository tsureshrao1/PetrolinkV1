import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  //Test
 HOST_NAME = "http://139.59.85.190:8090/petrolinkboot/";
   //Live
 //HOST_NAME = "http://148.72.211.27/petrolinkboot/";
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
