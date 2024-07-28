import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { DepartmentService } from '../Services/department.service';
import { Router } from '@angular/router';
import { IDepartment } from '../../Models/IDepartment';
import { IEmployee } from '../../Models/IEmployees';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {


  Emp:IEmployee;
  DeptList!:IDepartment[];


  constructor(private empservice:EmployeeService,private deptService:DepartmentService,private router:Router){
     this.Emp={empId:0,eName:"",password:"",gender:"",phone:"",email:"",salary:0,address:"",deptNo:0}
  }


  ngOnInit(): void {
    //alert(window.sessionStorage.getItem("EmpIdValue"));

    this.deptService.getAllDepartments().subscribe(data=>{
      this.DeptList=data;

    },error=>alert(error));

    this.empservice.getEmployeeById(parseInt(window.sessionStorage.getItem("EmpIdValue")!.toString())).subscribe(data=>{
      this.Emp=data;
    },error=>alert(error));

  }

  btn_DeleteClk():void{
    this.empservice.DeleteEmployee(parseInt(window.sessionStorage.getItem("EmpIdValue")!.toString())).subscribe(data=>{
      alert(data + "Record deleted Successfully ");
      this.router.navigate(["home"]);
    },error=>alert(error));
    
  }

  btn_CancelClk():void{
    this.router.navigate(["home"]);
  }

}
