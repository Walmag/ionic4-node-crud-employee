import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddEmployeePageRoutingModule } from './add-employee-routing.module';

import { AddEmployeePage } from './add-employee.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AddEmployeePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddEmployeePage]
})
export class AddEmployeePageModule { }
