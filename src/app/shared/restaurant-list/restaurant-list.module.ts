import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [
        RestaurantListComponent
    ],
    exports: [
        RestaurantListComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class RestaurantListModule { }
