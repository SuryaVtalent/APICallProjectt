import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../../Models/IDepartment';
import { DepartmentService } from '../Services/department.service';
import { IEmployee } from '../../Models/IEmployees';
import { EmployeeService } from '../Services/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  Emp:IEmployee;
  DeptList!:IDepartment[];

  constructor(private deptservice:DepartmentService,private empservice:EmployeeService,private router:Router){
    this.Emp={empId:0,eName:"",password:"",gender:"",phone:"",email:"",salary:0,address:"",deptNo:0}
  }

  ngOnInit(): void {
    //alert(window.sessionStorage.getItem("EmpIdVal"));

    this.deptservice.getAllDepartments().subscribe(data=>{
      this.DeptList=data;
    },error=>alert(error));    

    //Toget the value from JS empid

    this.empservice.getEmployeeById(parseInt(window.sessionStorage.getItem("EmpIdVal")!.toString())).subscribe(data=>{
      this.Emp=data;
    },error=>alert(error));

  }


  btn_UpdateClk():void{

    this.Emp.empId=parseInt(this.Emp.empId.toString());
    this.Emp.salary=parseInt(this.Emp.salary.toString());
    this.Emp.deptNo=parseInt(this.Emp.deptNo.toString());


    this.empservice.UpdateEmployee(this.Emp).subscribe(data=>{
      alert(data +"Record updated successfully");
      this.router.navigate(["home"]);
    },error=>alert(error));
    
  }

  btn_CancelClk():void{
    this.router.navigate(["home"]);
  }

}
