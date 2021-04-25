import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from 'app/models/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http:HttpClient) { }

  public addFacture(facture:Facture){
    return this.http.post("http://localhost:8080/facture/save",facture,{responseType:'text' as 'json'})
  }

  public getAllFactureByLogin(){
    let tokenStr='Bearer '+localStorage.getItem('token'); 
    console.log(tokenStr);
    
    const headers=new HttpHeaders().set("authorization",tokenStr)
    return this.http.get<Facture[]>("http://localhost:8080/facture/all/"+`${localStorage.getItem('login')}`,{headers});
  }

  
}
