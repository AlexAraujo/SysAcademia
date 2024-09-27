import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaClientesComponent } from './clientes/busca-clientes/busca-clientes.component';
import { CadastroClienteComponent } from './clientes/cadastro-cliente/cadastro-cliente.component';



@NgModule({
  declarations: [
    BuscaClientesComponent,
    CadastroClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CadastroModule { }
