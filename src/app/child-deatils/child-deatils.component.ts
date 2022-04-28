import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddChildComponent } from '../add-child/add-child.component';
import { PUserDailogComponent } from '../p-user-dailog/p-user-dailog.component';

@Component({
  selector: 'app-child-deatils',
  templateUrl: './child-deatils.component.html',
  styleUrls: ['./child-deatils.component.css']
})
export class ChildDeatilsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openadd_childDailog(){
    this.dialog.open(PUserDailogComponent,{
      width:'30%'
    });
  }
}
