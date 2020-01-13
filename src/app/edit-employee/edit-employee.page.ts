import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html'
})
export class EditEmployeePage implements OnInit {

  updateEmployeeForm: FormGroup;
  id: any;

  constructor(
    private employeeAPI: EmployeeService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getEmployeeData(this.id);
    this.updateEmployeeForm = this.fb.group({
      employee_name: [''],
      birthday: ['']
    })
  }

  getEmployeeData(id) {
    this.employeeAPI.getEmployee(id).subscribe(res => {
      this.updateEmployeeForm.setValue({
        employee_name: res['employee_name'],
        birthday: res['birthday']
      });
    });
  }

  updateForm() {
    if (!this.updateEmployeeForm.valid) {
      return false;
    } else {
      this.employeeAPI.updateEmployee(this.id, this.updateEmployeeForm.value)
        .subscribe((res) => {
          console.log(res)
          this.updateEmployeeForm.reset();
          this.router.navigate(['/home']);
        })
    }
  }

}
