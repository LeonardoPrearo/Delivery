import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list.component';



@NgModule({
    declarations: [
        RestaurantListComponent
    ],
    exports: [
        RestaurantListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class RestaurantListModule { }
