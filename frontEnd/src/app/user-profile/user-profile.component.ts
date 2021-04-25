import { Component, OnInit } from '@angular/core';
import { Person } from 'app/models/Person';
import { PersonService } from 'app/services/person.service';
declare var $: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  firstName:String;
  lastName:String;
  login:String;
  passWord:String;
  active:boolean;
  roles:String;
  person:Person;


 
  constructor(private personService:PersonService) { }

  ngOnInit() {
   
  }
  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    //const color = Math.floor((Math.random() * 4) + 1);
    const color = Math.floor(2);
    $.notify({
        icon: "notifications",
        message: "This user is added successfully."

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}
  addNewAdmin(){
this.person=new Person();
   this.person.login=this.login;
   this.person.firstName=this.firstName;
   this.person.lastName=this.lastName;
   this.person.passWord=this.passWord;
   this.person.roles=this.roles;
   this.person.active=true;

   this.personService.addUser(this.person).subscribe(data=>console.log(data))
  }

}
