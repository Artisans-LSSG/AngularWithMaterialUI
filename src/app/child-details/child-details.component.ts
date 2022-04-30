import { Component, OnInit, ViewChild } from '@angular/core';
import { PChildDailogComponent } from '../p-child-dailog/p-child-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../shared/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {

  displayedColumns: string[] = ['FirstName', 'LastName', 'DOB', 'Email','Gender','Phone_Number','PAN','Address', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private dialog: MatDialog, public api : ApiService) { }

  ngOnInit(): void {
  }

  openadd_childDailog(){
    this.dialog.open(PChildDailogComponent,{
      width:'30%'
    });
  }

  openDialog() {
    this.dialog.open(PChildDailogComponent, {
      width: '30%',
    }).afterClosed().subscribe(val=>{
      if(val==='Save'){
        this.getAllProducts();
      }
    });
  }

  editProduct(row:any){
    this.dialog.open(PChildDailogComponent,{
    width:'30%',
    data:row
    }).afterClosed().subscribe(val=>{
      if(val=='update'){
        this.getAllProducts();
      }
    });
  }

  deleteProduct(id:number){
      this.api.deleteProduct(id)
      .subscribe({
        next:(response)=>{
        alert("deleted Successfully !!");
        this.getAllProducts();
        },
        error:()=>{
          alert("error while deleting the records");
        }
      });
  }

  getAllProducts(){
    this.api.getProductData().
    subscribe({
      next:(response)=>{
        // console.log(response);
        this.dataSource=new MatTableDataSource(response);
        this.dataSource.paginator= this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(error)=>{
      alert("Error while fatching Records !!");
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}