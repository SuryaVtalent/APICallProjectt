import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../Models/IEmployees';
import { EmployeeService } from '../Services/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  EmpList!:IEmployee[];

  constructor(private empservice:EmployeeService,private router:Router){}

  ngOnInit(): void {
    this.empservice.GetAllEmployees().subscribe(data=>{
      this.EmpList=data;
      //console.log(data);
    },error=>alert(error));
  }


  btn_EditClk(empId:number):void{
   // alert("Edit clicked Successfully");
   //Persist object to get value from JS
   window.sessionStorage.setItem("EmpIdVal",empId.toString());
   this.router.navigate(["edit"]);
  
  }

  btn_DeleteClk(empId:number):void{
    //alert("Delete clicked succesfully");
    window.sessionStorage.setItem("EmpIdValue",empId.toString());
    this.router.navigate(["delete"]);
  }


}
