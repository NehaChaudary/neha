import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingTableComponent } from './billing-table.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:BillingTableComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [BillingTableComponent]
})
export class BillingTableModule { }
