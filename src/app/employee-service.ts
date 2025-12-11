import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeClass } from './employee-class';
import { EmployeeEdit } from './employee-edit/employee-edit';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private httpclientobj:HttpClient){


  }
  private backendurl="http://localhost:3000/employee";
  public empinsert(employeeobj:EmployeeClass){
    let jdata=JSON.stringify(employeeobj);
    return this.httpclientobj.post(this.backendurl,jdata);
  }
  
  public empupdate(employeeobj:EmployeeClass){
    let jdata=JSON.stringify(employeeobj);
    let url=this.backendurl+"/"+employeeobj.id;
    return this.httpclientobj.put(url,jdata);
  }

  public empdelete(id:number){
    let url=this.backendurl+"/"+id;
    return this.httpclientobj.delete(url);
  }
  public empselectAll(){
    return this.httpclientobj.get<EmployeeClass[]>(this.backendurl);
  }
  public empselectbyid(id:number){
    let url=this.backendurl+"/"+id;
    return this.httpclientobj.get<EmployeeClass>(url);
  }


}
