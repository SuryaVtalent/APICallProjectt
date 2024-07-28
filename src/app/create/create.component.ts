import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../Services/department.service';
import { IDepartment } from '../../Models/IDepartment';
import { Router } from '@angular/router';
import { IEmployee } from '../../Models/IEmployees';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  EmpC:IEmployee;
  DeptList!:IDepartment[];

  constructor(private deptservice:DepartmentService, private router:Router,private empservice:EmployeeService){
    this.EmpC={empId:0,eName:"",password:"",gender:"",phone:"",email:"",salary:0,address:"",deptNo:0}
  }

  ngOnInit(): void {
    this.deptservice.getAllDepartments().subscribe(data=>{
      this.DeptList=data;
    },error=>alert(error));
  }

  btn_RegisterClk():void{

    this.EmpC.salary=parseInt(this.EmpC.salary.toString());
    this.EmpC.deptNo=parseInt(this.EmpC.deptNo.toString());


   this.empservice.InsertEmployee(this.EmpC).subscribe(data=>{
    alert(data +"Record Inserted successfully");
    this.router.navigate(["home"]);
   },error=>alert(error));


  
  }

  btn_CancelClk():void{
    this.router.navigate(["home"]);
  }

}
