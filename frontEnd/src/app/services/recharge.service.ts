import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Recharge } from 'app/models/Recharge';
import { Observable } from 'rxjs';
import { PersonService } from './person.service';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {
  personId:number;

  constructor(private http:HttpClient,private personService:PersonService) { }

  public addRecharge(recharge:Recharge){
    return this.http.post("http://localhost:8080/recharge/save",recharge,{responseType:'text' as 'json'})
  }
  

  public allRecharges():any{
    let tokenStr='Bearer '+localStorage.getItem('token'); 
      console.log(tokenStr);
      
      const headers=new HttpHeaders().set("authorization",tokenStr)
    /*  this.personService.getPersonByLogin(localStorage.getItem('login')).subscribe(person=>{this.personId=person.id;
        //return this.http.get<Recharge[]>("http://localhost:8080/recharge/all/"+`${personId}`,{headers})
      
      })*/
      
      
    return this.http.get<Recharge[]>("http://localhost:8080/recharge/all/"+`${localStorage.getItem('login')}`,{headers});
  }

  


}
