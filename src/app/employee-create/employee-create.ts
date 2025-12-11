import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EmployeeClass } from '../employee-class';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-create',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-create.html',
  styleUrl: './employee-create.css',
})
export class EmployeeCreate {
  employeeobj= new EmployeeClass("",0);
  constructor(private employeeserviceobj:EmployeeService, private routerobj:Router){

  }
  savedata(){
    this.employeeserviceobj.empinsert(this.employeeobj).subscribe({
      next:(response)=>{this.routerobj.navigateByUrl("/");},
      error:(err)=>{console.log(err);},
      complete:()=>{}
    });
  }

}
