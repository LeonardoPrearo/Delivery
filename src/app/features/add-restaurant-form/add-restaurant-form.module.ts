import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestaurantFormComponent } from './add-restaurant-form.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes : Routes = [
  {path:"", component: AddRestaurantFormComponent}
]

@NgModule({
  declarations: [
    AddRestaurantFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AddRestaurantFormModule { }
