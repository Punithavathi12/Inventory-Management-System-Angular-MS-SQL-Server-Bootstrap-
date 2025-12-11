import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../employee-service';
import { EmployeeClass } from '../employee-class';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  providers:[EmployeeService]
})
export class EmployeeList {
  constructor(private employeeserviceobj:EmployeeService){
    this.getdata();
  }
  employee:EmployeeClass[]=[];
  getdata(){
    this.employeeserviceobj.empselectAll().subscribe({
      next:(response)=>{this.employee=response;},
      error:(err)=>{console.log(err);},
      complete:()=>{}
    });
  }

}
