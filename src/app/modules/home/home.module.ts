import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinanceiroModule } from '../financeiro/financeiro.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FinanceiroModule
  ],
  exports: [

  ]
})
export class HomeModule { }
