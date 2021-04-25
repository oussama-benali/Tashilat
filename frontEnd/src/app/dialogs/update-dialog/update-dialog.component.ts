import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from 'app/models/Person';
import { PersonService } from 'app/services/person.service';


@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  person:Person;
  firstName:string;
  lastName:string;
  login:string;
  passWord:string;
  roles:string;
  active:boolean;

  
  
  constructor(public dialogRef:MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,private personService:PersonService) { }

  ngOnInit(): void {
    this.firstName=this.data.person.firstName;
    this.lastName=this.data.person.lastName;
    this.login=this.data.person.login;
    this.passWord=this.data.person.passWord;
    this.roles=this.data.person.roles;
    this.active=this.data.person.active;
  }
  close(){
    this.dialogRef.close()
  }
  update(){
    console.log(this.firstName);
    this.person=new Person();
    this.person.id=this.data.person.id;
    this.person.firstName=this.firstName;
    this.person.lastName=this.lastName;
     this.person.login=this.login;
     this.person.passWord=this.passWord;
     this.person.roles=this.roles;
     this.person.active=this.active;
     this.personService.addUser(this.person).subscribe(data=>console.log(data));
    this.dialogRef.close()


  }

}
