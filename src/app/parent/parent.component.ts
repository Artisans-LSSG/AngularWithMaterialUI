import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PUserDailogComponent} from '../p-user-dailog/p-user-dailog.component';
import {PChildDailogComponent} from '../p-child-dailog/p-child-dailog.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openP_UDailog() 
  {
    // this.signup.signup=false;
    // this.signin=true;
    this.dialog.open(PUserDailogComponent,{
      width:'30%'
    });
  }
  openP_CDailog() 
  {
    // this.signup.signup=false;
    // this.signin=true;
    this.dialog.open(PChildDailogComponent,{
      width:'30%'
    });
  }
}