import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'app/models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  public getPersonByLogin(name:string):any{
  let token= localStorage.getItem('token');
    let tokenStr='Bearer '+token; 
    const headers=new HttpHeaders().set("authorization",tokenStr)
    return  this.http.get("http://localhost:8080/"+`${name}`,{headers})
  }
  public addUser(person:Person){
    return this.http.post("http://localhost:8080/save",person,{responseType:'text' as 'json'})
  }
  

  public getAllUsers():any{
    let token= localStorage.getItem('token');
    let tokenStr='Bearer '+token; 
    const headers=new HttpHeaders().set("authorization",tokenStr)
    return  this.http.get("http://localhost:8080/admin/all",{headers})
  }
}
