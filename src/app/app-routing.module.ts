import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "home", loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)},
  {path: "restaurant-list-page", loadChildren: () => import("./features/restaurant-list-page/restaurant-list-page.module").then(m => m.RestaurantListPageModule)},
  {path: "add-restaurant-form", loadChildren: () => import("./features/add-restaurant-form/add-restaurant-form.module").then(m => m.AddRestaurantFormModule)},
  {path: "order", loadChildren: () => import("./features/order/order.module").then(m => m.OrderModule)},
  {path: "**", redirectTo: "home", pathMatch: "full"},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
