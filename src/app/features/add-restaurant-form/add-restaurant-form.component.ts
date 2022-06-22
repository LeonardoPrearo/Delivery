import {Component, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../../core/models/restaurant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RestaurantService} from "../../core/services/restaurant-service/restaurant.service";
import {Subscription} from "rxjs";
import {Menu} from "../../core/models/menu";

@Component({
  selector: 'app-add-restaurant-form',
  templateUrl: './add-restaurant-form.component.html',
  styleUrls: ['./add-restaurant-form.component.scss']
})
export class AddRestaurantFormComponent implements OnInit, OnDestroy {

  restaurant : Restaurant;
  restaurantGetSubscription: Subscription;
  restaurantPostSubscription : Subscription;
  restaurantList: Restaurant[];
  restaurantForm : FormGroup;

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
    this.restaurantForm = new FormGroup({
        name: new FormControl("", Validators.compose([Validators.required])),
        menu : new FormControl("", Validators.compose([Validators.required]))
      }
    )

    this.getAllRestaurants();
  }

  getAllRestaurants(){
    this.restaurantGetSubscription = this.restaurantService.getAllRestaurants().subscribe(
      observer => {this.restaurantList = [...observer]},
      error => {
        console.log(error)}
    )
  }

  postRestaurant() {
    const menuObject  = this.restaurantForm.value.menu as Menu
    const newRestaurant : Restaurant = this.restaurantForm.value as Restaurant
    this.restaurantPostSubscription = this.restaurantService.addRestaurant(newRestaurant).subscribe(
      observer => {this.restaurantForm.reset()
      this.getAllRestaurants()},
      error => {
        console.log(error)}
    )
  }

  ngOnDestroy() {
    this.restaurantGetSubscription?.unsubscribe();
    this.restaurantPostSubscription?.unsubscribe();
  }


}
