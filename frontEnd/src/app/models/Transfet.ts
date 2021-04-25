import { Person } from "./Person";

export class Transfert{
    id :number;
    operation_name:string;
    montant:number;
    date:Date;
    person:Person;
    nomRecepteur:string;
    cin:string;
    etat:boolean
}