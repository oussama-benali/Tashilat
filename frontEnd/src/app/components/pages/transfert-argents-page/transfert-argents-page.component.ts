import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Person } from "app/models/Person";
import { Transfert } from "app/models/Transfet";
import { PersonService } from "app/services/person.service";
import { TransferArgentService } from "app/services/transfer-argent.service";

@Component({
  selector: "app-transfert-argents-page",
  templateUrl: "./transfert-argents-page.component.html",
  styleUrls: ["./transfert-argents-page.component.scss"],
})
export class TransfertArgentsPageComponent implements OnInit {
  transferts: Transfert[];

  userLoggin;
  montant: number;
  date: Date;
  person: Person;
  nomRecepteur: string;
  cin: string;
  etat: boolean;
  transfert: Transfert;

  constructor(
    private service: TransferArgentService,
    private personService: PersonService,
    private jwtHelperService: JwtHelperService
  ) {}

  ngOnInit(): void {
    this.service.getTransfersByLogin().subscribe((transferts) => {
      this.transferts = transferts;
      console.log(this.transferts)
    });
  }

  getDecodeToken() {
    const token = localStorage.getItem("token");
    //console.log(token)

    // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(token);
    this.userLoggin = decodeToken["sub"];
    console.log(this.userLoggin);
  }

  ajoutTransfert() {
    this.transfert = new Transfert();
    this.person = new Person();
    this.transfert.cin = this.cin;
    this.getDecodeToken();

    this.transfert.etat = false;
    this.transfert.nomRecepteur = this.nomRecepteur;

    this.transfert.operation_name = "Transfert D'argent";
    this.transfert.montant = this.montant;
    this.transfert.date = new Date();

    this.personService.getPersonByLogin(this.userLoggin).subscribe((data) => {
      this.transfert.person = data;
      this.service.addTransfert(this.transfert).subscribe((data) => {
        console.log(data);
      });

      console.log(this.transfert);
    });
    window.location.reload();
    /* this.recharge.person=this.person;
       console.log(this.recharge.person);*/

    /* this.service.addRecharge(this.recharge).subscribe(data=>{
    console.log(data); })

  }*/
  }
}
