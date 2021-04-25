import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Facture } from 'app/models/Facture';
import { Person } from 'app/models/Person';
import { FactureService } from 'app/services/facture.service';
import { PersonService } from 'app/services/person.service';
import { data } from 'jquery';

@Component({
  selector: 'app-facture-page',
  templateUrl: './facture-page.component.html',
  styleUrls: ['./facture-page.component.scss']
})
export class FacturePageComponent implements OnInit {
factures:Facture[];

  userLoggin
  refContrat:string;
  mois:number;
  montant:number;
  person:Person;
  facture:Facture;
  constructor(private service:FactureService,private personService:PersonService,private jwtHelperService:JwtHelperService ) { }

  ngOnInit(): void {
    this.service.getAllFactureByLogin().subscribe(factures=>this.factures=factures)
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
    this.facture=new Facture()
    this.person=new Person();
    this.facture.refContrat=this.refContrat;
    this.getDecodeToken()

    this.facture.mois=this.mois;
    this.facture.montant=this.montant;
    this.facture.operation_name="Payement Facture";
    
    this.facture.date=new Date()
   

    this.personService.getPersonByLogin(this.userLoggin).subscribe(data=>{
      this.facture.person=data;
      this.service.addFacture(this.facture).subscribe(data=>{
        console.log(data); })

      console.log(this.facture);
      
       })
      /* this.recharge.person=this.person;
       console.log(this.recharge.person);*/
       
  /* this.service.addRecharge(this.recharge).subscribe(data=>{
    console.log(data); })

  }*/
  window.location.reload();
  }

}
