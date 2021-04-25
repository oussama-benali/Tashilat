import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http:HttpClient) { }

  public allOperations():any{
    let tokenStr='Bearer '+localStorage.getItem('token'); 
      console.log(tokenStr);
      
      const headers=new HttpHeaders().set("authorization",tokenStr)
 
      
      
    return this.http.get<any[]>("http://localhost:8080/operation/all/"+`${localStorage.getItem('login')}`,{headers});

  }

  public totalOperation():any{
    let tokenStr='Bearer '+localStorage.getItem('token'); 
      console.log(tokenStr);
      
      const headers=new HttpHeaders().set("authorization",tokenStr)
 
      
      
    return this.http.get<any[]>("http://localhost:8080/operation/all/",{headers});
  }
}
