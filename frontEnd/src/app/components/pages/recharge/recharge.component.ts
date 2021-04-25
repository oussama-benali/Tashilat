import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Person } from 'app/models/Person';
import { PersonService } from 'app/services/person.service';
import { RechargeService } from 'app/services/recharge.service';
import { siteVerification_v1 } from 'googleapis';
import { data } from 'jquery';
import { from } from 'rxjs';
import {Recharge} from '../../../models/Recharge'

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss']
})
export class RechargeComponent implements OnInit {
  recharges:Recharge[];

  userLoggin:string;


  numero:string;
  operateur:string;
   offre:string;
   operation_name:string;
   montant:number;
   recharge:Recharge;
   person:Person;
  constructor(private service:RechargeService,private personService:PersonService,private jwtHelperService:JwtHelperService ) { }

  ngOnInit(): void {
    //console.log(this.personService.getPersonByLogin("youssef99"));
    
    this.getDecodeToken()
  this.service.allRecharges().subscribe(recharges=>{
    this.recharges=recharges;
    console.log(this.recharges);
    
  }
  );
  
     
  }
  getDecodeToken(){
    const token = localStorage.getItem('token');
   //console.log(token)
  
      // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(token);
    this.userLoggin=decodeToken['sub']
    console.log(this.userLoggin);
    
  }

  


  ajoutRecharge(){
    console.log("fonction appelee");
    
    this.recharge=new Recharge()
    this.person=new Person();
    this.recharge.numero=this.numero;
    this.getDecodeToken()

    this.recharge.operateur=this.operateur;
    this.recharge.offre=this.offre;
    this.recharge.operation_name="Recharge Telphone";
    this.recharge.montant=this.montant;
    this.recharge.date=new Date()
   

    this.personService.getPersonByLogin(this.userLoggin).subscribe(data=>{
      this.recharge.person=data;
      this.service.addRecharge(this.recharge).subscribe(data=>{
        console.log(data); })

      console.log(this.recharge);
      
       })
       this.recharge.person=this.person;
       console.log(this.recharge.person);
       window.location.reload();
  /* this.service.addRecharge(this.recharge).subscribe(data=>{
    console.log(data); })

  }*/
  }
}
