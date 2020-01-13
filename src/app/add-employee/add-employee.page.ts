import { Component, OnInit, NgZone } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html'
})

export class AddEmployeePage implements OnInit {

  employeeForm: FormGroup;

  constructor(
    private employeeAPI: EmployeeService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone
  ) {
    this.employeeForm = this.fb.group({
      employee_name: [''],
      birthday: ['']
    })
  }

  ngOnInit() { }

  onFormSubmit() {
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.employeeAPI.addEmployee(this.employeeForm.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res)
            this.employeeForm.reset();
            this.router.navigate(['/home']);
          })
        });
    }
  }

}
