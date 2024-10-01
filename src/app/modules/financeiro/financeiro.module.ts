import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletosComponent } from './boletos/boletos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BoletosComponent
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
