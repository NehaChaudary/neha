import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

import { DashboardComponent } from './dashboard.component';

import { RouterModule,Routes } from '@angular/router';




const routes:Routes=[
{path:'',component:DashboardComponent,
children:[
  {path:'menu',loadChildren:'app/dashboard/menu/menu.module#MenuModule'},
  {path:'scheduling',loadChildren:'app/dashboard/scheduling/scheduling.module#SchedulingModule'},
 //{path:'drinks',loadChildren:'app/dasboard/drinks/drinks.module#DrinksModule'},
 // {path:'nearby',loadChildren:'app/dasboard/near-by/near-by.module#NearByModule'},
 // {path:'booking',loadChildren:'app/dasboard/booking/booking.module#BookingModule'},
  //{path:'billingtable',loadChildren:'app/dasboard/billing-table/billing-table.module#BillingTableModule'},
  //{path:'onlinepayment',loadChildren:'app/dasboard/online-payment/online-payment.module#OnlinePaymentModule'},
  //{path:'referfriend',loadChildren:'app/dasboard/refer-friend/refer-friend.module#ReferFriendModule'},
  //{path:'homedelivery',loadChildren:'app/dasboard/home-delivery/home-delivery#HomeDeliveryModule'},
   // {path:'bestdishes',loadChildren:'app/dasboard/bestdishes/bestdishes.module#BestDishesModule'},
   // {path:'offer', loadChildren:'app/dashboard/offer/offer.module#OfferModule'}
  
 

]
}

]

@NgModule({
  imports: [
    CommonModule,
    
    
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent],
   
})
export class DashboardModule { }
