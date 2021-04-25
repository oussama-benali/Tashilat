import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from 'app/dialogs/update-dialog/update-dialog.component';
import { Person } from 'app/models/Person';
import { PersonService } from 'app/services/person.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  persons:Person[]
  constructor(private personService:PersonService,public dialog: MatDialog) { }

  ngOnInit() {
    this.personService.getAllUsers().subscribe(data=>this.persons=data);
  }

  openDialog(person:Person): void {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data :{person:person}
     // data: {name: this.name, animal: this.animal}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      ///this.onDelete(this.person)
      
    });
  }
  

}
