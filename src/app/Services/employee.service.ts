import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../../Models/IEmployees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  HostUrl:string="http://localhost:29756";
  EmpWebApiPath:string="/api/Emp/";

  constructor(private httpser:HttpClient) { }


  GetAllEmployees():Observable<IEmployee[]>{
    return this.httpser.get<IEmployee[]>(this.HostUrl+this.EmpWebApiPath+"AllEmployees");
  }

  getEmployeeById(emp:number):Observable<IEmployee>{
   return this.httpser.get<IEmployee>(this.HostUrl+this.EmpWebApiPath+"GetEmpById?EmpId="+emp);
  }


  InsertEmployee(emp:IEmployee):Observable<number>{
   return this.httpser.post<number>(this.HostUrl+this.EmpWebApiPath+"InsertEmployee",emp);
  }

  UpdateEmployee(emp:IEmployee):Observable<number>{
    return this.httpser.put<number>(this.HostUrl+this.EmpWebApiPath+"UpdateEmployee",emp);
    

  }

  DeleteEmployee(emp:number):Observable<IEmployee>{
   return this.httpser.delete<IEmployee>(this.HostUrl+this.EmpWebApiPath+"DeleteEmployee?EmpId="+emp);
  }
}
