import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../core/models/restaurant";
import {FormControl, FormGroup} from "@angular/forms";
import {RestaurantService} from "../../core/services/restaurant-service/restaurant.service";
import {Subscription} from "rxjs";
import {Order} from "../../core/models/order";
import {Menu} from "../../core/models/menu";
import {OrderService} from "../../core/services/order-service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  ordersList : Order[];
  restaurantsList : Restaurant[];
  menusList : Menu[];
  orderForm : FormGroup;
  restaurantGetSubscription: Subscription;
  orderGetSubscription: Subscription;
  orderPostSubscription: Subscription;

  constructor(private restaurantService : RestaurantService, private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
        name: new FormControl(""),
        menu: new FormControl(""),
        dish: new FormControl(""),
        portionsNumber: new FormControl("")
      }
    )

    this.getAllRestaurants();

    this.getAllOrders();
  }

  getAllRestaurants() {
    this.restaurantGetSubscription = this.restaurantService.getAllRestaurants().subscribe(
      observer => {this.restaurantsList = [...observer]},
      error => {
        console.log(error)}
    )
  }

  getAllOrders(){
    this.orderGetSubscription  = this.orderService.getAllOrders().subscribe(
      observer => {this.ordersList = [...observer]},
      error => {
        console.log(error)
      }
    )
  }

  postOrder() {
    const newOrder = this.orderForm.value;
    this.orderPostSubscription = this.orderService.postOrder(newOrder).subscribe(
      observer => {this.orderForm.reset()
      this.getAllOrders()},
      error => {
        console.log(error)}
    )
  }


  ngOnDestroy() {
    this.restaurantGetSubscription?.unsubscribe();
    this.orderPostSubscription?.unsubscribe();
    this.orderGetSubscription?.unsubscribe();
  }


}
