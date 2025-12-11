import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeClass } from '../employee-class';
import { EmployeeService } from '../employee-service';

@Component({
  selector: 'app-employee-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
  providers:[EmployeeService]
})
export class EmployeeDetails {
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

   removedata(){
    let conf = confirm("are you sure?");
    if(conf){
      this.employeeserviceobj.empdelete(this.id).subscribe({
        next:(response)=>{this.routerobj.navigateByUrl("/");},
        error:(err)=>{console.log(err);},
        complete:()=>{}
      });
    }
   }

}
