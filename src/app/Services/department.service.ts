import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../../Models/IDepartment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  HostUrl:string="http://localhost:29756";
  DeptWebApiPath:string="/api/Dept/";


  constructor(private httpser:HttpClient) { }

  getAllDepartments():Observable<IDepartment[]>{
  return this.httpser.get<IDepartment[]>(this.HostUrl+this.DeptWebApiPath+"AllDepartments");
  }


  

}
