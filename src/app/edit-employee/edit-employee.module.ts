import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EditEmployeePageRoutingModule } from './edit-employee-routing.module';

import { EditEmployeePage } from './edit-employee.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EditEmployeePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditEmployeePage]
})
export class EditEmployeePageModule { }
