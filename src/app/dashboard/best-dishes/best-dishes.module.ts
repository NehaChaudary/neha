import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestDishesComponent } from './best-dishes.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:'',component:BestDishesComponent}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [BestDishesComponent]
})
export class BestDishesModule { }
