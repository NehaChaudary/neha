import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDeliveryComponent } from './home-delivery.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:HomeDeliveryComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [HomeDeliveryComponent]
})
export class HomeDeliveryModule { }
