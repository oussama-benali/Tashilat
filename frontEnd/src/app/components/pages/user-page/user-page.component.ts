import { Component, OnInit } from '@angular/core';
import { Person } from 'app/models/Person';
import { OperationService } from 'app/services/operation.service';
import { PersonService } from 'app/services/person.service';
import { data } from 'jquery';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
operations:any[]
user:Person;
  constructor(private operationService:OperationService,private personService:PersonService) { }

  ngOnInit(): void {
    this.operationService.allOperations().subscribe(data=>{this.operations=data}
      )
    this.personService.getPersonByLogin(localStorage.getItem("login")).subscribe(data=>{this.user=data})
  }

}
