import { Component, OnInit } from '@angular/core';
import { OperationService } from 'app/services/operation.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  operations:any[]
  constructor(private operationService:OperationService) { }

  ngOnInit() {
    this.operationService.totalOperation().subscribe(data=>{this.operations=data})
  }

}
