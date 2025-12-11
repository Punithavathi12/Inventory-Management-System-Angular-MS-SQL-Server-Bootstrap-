import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../employee-service';
import { EmployeeClass } from '../employee-class';

@Component({
  selector: 'app-employee-edit',
  imports: [FormsModule, RouterLink],
  templateUrl: './employee-edit.html',
  styleUrl: './employee-edit.css',
  providers:[EmployeeService]
})
export class EmployeeEdit {

  id:number=0;
  employeeobj= new EmployeeClass("",0);
  constructor(private employeeserviceobj:EmployeeService,
              private activatedrouteobj:ActivatedRoute,
              private routerobj:Router
   )
   {
        this.id=this.activatedrouteobj.snapshot.params["id"];
        this.employeeserviceobj.empselectbyid(this.id).subscribe({
          next:(response)=>{this.employeeobj=response},
          error:(err)=>{console.log(err);},
          complete:()=>{}
        });
   }

   savedata(){
    this.employeeserviceobj.empupdate(this.employeeobj).subscribe({
      next:(response)=>{this.routerobj.navigateByUrl("/");},
      error:(err)=>{console.log(err);},
      complete:()=>{}
    });
   }
}
