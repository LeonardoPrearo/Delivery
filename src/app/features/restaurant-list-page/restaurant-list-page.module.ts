import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListPageComponent } from './restaurant-list-page.component';
import {RouterModule, Routes} from "@angular/router";
import {RestaurantListModule} from "../../shared/restaurant-list/restaurant-list.module";

const routes : Routes = [
  {path: "", component: RestaurantListPageComponent}
]

@NgModule({
  declarations: [
    RestaurantListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RestaurantListModule
  ]
})
export class RestaurantListPageModule { }
