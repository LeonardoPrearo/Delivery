import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:3000/Orders")
  }

  postOrder(order: Order): Observable<Order>{
    return this.http.post<Order>("http://localhost:3000/Orders", order)
  }
}
