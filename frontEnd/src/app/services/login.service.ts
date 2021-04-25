import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json '})
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  constructor(private http:HttpClient,private jwtHelperService:JwtHelperService,private router: Router) { }

  public login ( login:string,password:string ){
    console.log(login +"flmdlk+ "+password)
    const headers=new HttpHeaders({Authorization:'Basic'+btoa(login+":"+password)})
    return this.http.get("http://localhost:8080/admin",{headers,responseType:'text' as 'json'})
  }
  public generateToken(request){
    return this.http.post("http://localhost:8080/autenticate",request,{responseType:'text' as 'json'})
    
  }
  public welcomeA(){
    const token = localStorage.getItem('token');
    const decodeToken = this.jwtHelperService.decodeToken(token);
    let arr=decodeToken['AUTHORITIES_KEY'].split(",");
    if (arr.length==2){
      this.router.navigate(['table-list'])
    
    }
    if(arr.length==1){
      this.router.navigate(['user'])
    }

  }
  public welcome(token){
    let tokenStr='Bearer '+token; 
    console.log(tokenStr);
    
    const headers=new HttpHeaders().set("authorization",tokenStr)
    return this.http.get("http://localhost:8080/admin",{headers,responseType:'text' as 'json'})
  }

}
