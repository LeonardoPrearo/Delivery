import {Component, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../../core/models/restaurant";
import {RestaurantService} from "../../core/services/restaurant-service/restaurant.service";
import {Subscription} from "rxjs";
import {Menu} from "../../core/models/menu";
import {Dish} from "../../core/models/dish";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy{

  restaurant : Restaurant;
  restaurantList : Restaurant[];
  restaurantSubscription : Subscription;

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit(): void {
    this.getAllRestaurants()
  }

  getAllRestaurants(){
    this.restaurantSubscription = this.restaurantService.getAllRestaurants().subscribe(
      observer => {this.restaurantList = [...observer]},
      error => {
        console.log(error)}
    )
  }

  showMenu(restaurant: Restaurant) {
    this.restaurant = {...restaurant}
  }

  ngOnDestroy(): void {
    this.restaurantSubscription?.unsubscribe()
  }


}
