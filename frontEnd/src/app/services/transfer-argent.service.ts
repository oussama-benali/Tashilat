import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from 'app/models/Person';
import { Transfert } from 'app/models/Transfet';

@Injectable({
  providedIn: 'root'
})
export class TransferArgentService {

  constructor(private http:HttpClient) { }
  
  
  public addTransfert(transfert:Transfert){
    return this.http.post("http://localhost:8080/transfert/save",transfert,{responseType:'text' as 'json'})
  }

  public getTransfersByLogin(){
    let tokenStr='Bearer '+localStorage.getItem('token'); 
    console.log(tokenStr);
    
    const headers=new HttpHeaders().set("authorization",tokenStr)
    return this.http.get<Transfert[]>("http://localhost:8080/transfert/all/"+`${localStorage.getItem('login')}`,{headers});
  }
}
