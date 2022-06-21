import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../../models/restaurant";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient) { }

  getAllRestaurants() : Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>("http://localhost:3000/Restaurants");
  }

  addRestaurant(restaurant : Restaurant) : Observable<Restaurant>{
    return this.http.post<Restaurant>("http://localhost:3000/Restaurants", restaurant);
  }
}
