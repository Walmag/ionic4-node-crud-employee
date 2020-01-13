import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../shared/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})

export class HomePage implements OnInit {
  Employees: any = [];

  constructor(
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      console.log(res)
      this.Employees = res;
    })
  }

  deleteEmployee(employee, i) {
    if (window.confirm('Você gostaria de deletar o funcionário?')) {
      this.employeeService.deleteEmployee(employee._id)
        .subscribe(() => {
          this.Employees.splice(i, 1);
          console.log('Funcionário deletado!')
        }
        )
    }
  }
}
