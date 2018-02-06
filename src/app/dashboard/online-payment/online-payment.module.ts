import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlinePaymentComponent } from './online-payment.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:OnlinePaymentComponent}
]
@NgModule({
  imports: [
  CommonModule,
  RouterModule.forChild(routes)
  ],
  declarations: [OnlinePaymentComponent]
})
export class OnlinePaymentModule { }
