import { Component, OnInit } from '@angular/core';
import {Restaurant} from "../../core/models/restaurant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RestaurantService} from "../../core/services/restaurant-service/restaurant.service";
import {Subscription} from "rxjs";
import {Order} from "../../core/models/order";
import {OrderService} from "../../core/services/order-service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  boh : any;
  order : Order;
  ordersList : Order[];
  restaurantsList : Restaurant[];
  restaurant : Restaurant;
  orderForm : FormGroup;
  nameForm: FormGroup;
  restaurantGetSubscription: Subscription;
  orderGetSubscription: Subscription;
  orderPostSubscription: Subscription;
  orderDeleteSubscription: Subscription;
  orderUpdateSubscription: Subscription;

  constructor(private restaurantService : RestaurantService, private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
        name: new FormControl("", Validators.compose([Validators.required])),
        dish: new FormControl("", Validators.compose([Validators.required])),
        portionsNumber: new FormControl("", Validators.compose([Validators.required, Validators.min(2), Validators.max(15)]))
      }
    )

    this.nameForm = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required]))
    })

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
      observer => {this.ordersList = [...observer]
        console.log(this.ordersList)
        console.log(this.order)},
      error => {
        console.log(error)
      }
    )
  }

  postOrder() {
    const newOrder = this.orderForm.value;
    this.orderPostSubscription = this.orderService.postOrder(newOrder).subscribe(
      observer => {this.orderForm.reset()
        this.getAllOrders()
        this.order = {...newOrder}
        },
      error => {
        console.log(error)}
    )
  }

  deleteOrder(id: number) {
  this.orderDeleteSubscription = this.orderService.deleteOrder(id).subscribe(
    observer => {this.getAllOrders()},
    error => {
      console.log(error)
    }
  )
  }

  updateOrder(order: Order) {
  this.orderUpdateSubscription = this.orderService.updateOrder(order).subscribe(
    observer=> {this.orderForm.patchValue(order)
    },
    error => {
      console.log(error)
    }
  )
  }

  saveChoice() {
    const newName = this.nameForm.value
    const newOrder = this.orderForm.value
    newOrder.name = {...newName}
    this.restaurant = {...newName}
    this.boh = this.restaurantsList.find(el => el.name === this.restaurant.name)
    this.restaurant = this.boh
    this.nameForm.reset()
    this.orderForm.patchValue(this.restaurant)
  }


  ngOnDestroy() {
    this.restaurantGetSubscription?.unsubscribe();
    this.orderPostSubscription?.unsubscribe();
    this.orderGetSubscription?.unsubscribe();
    this.orderDeleteSubscription?.unsubscribe();
    this.orderUpdateSubscription?.unsubscribe();
  }



}
