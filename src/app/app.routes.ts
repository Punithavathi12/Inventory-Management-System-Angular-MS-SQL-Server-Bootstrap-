import { Routes } from '@angular/router';
import { EmployeeCreate } from './employee-create/employee-create';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeEdit } from './employee-edit/employee-edit';
import { EmployeeDetails } from './employee-details/employee-details';

export const routes: Routes = [
    {path:"New",component:EmployeeCreate},
    {path:"list",component:EmployeeList},
    {path:"edit/:id",component:EmployeeEdit},
    {path:"details/:id",component:EmployeeDetails},
    {path:"",component:EmployeeList}
];
