import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletosComponent } from './boletos/boletos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeFinanceiroComponent } from './home-financeiro/home-financeiro.component';



@NgModule({
  declarations: [
    BoletosComponent,
    HomeFinanceiroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    BoletosComponent
  ]
})
export class FinanceiroModule { }
