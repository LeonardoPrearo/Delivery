import {Restaurant} from "./restaurant";
import {Menu} from "./menu";
import {Dish} from "./dish";

export interface Order {
  "id" : number,
  "name": Restaurant,
  "menu": Menu,
  "dish": Dish,
  "portionsNumber": number
}
