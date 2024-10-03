import { Routes } from "@angular/router";
import { DashboardComponent } from "./modules/home/dashboard/dashboard.component";
import { HomeFinanceiroComponent } from "./modules/financeiro/home-financeiro/home-financeiro.component";
import { BoletosComponent } from "./modules/financeiro/boletos/boletos.component";
import { HomeCadastroComponent } from "./modules/cadastro/home-cadastro/home-cadastro.component";

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'financeiro', component: HomeFinanceiroComponent },
  { path: 'financeiro/boletos', component: BoletosComponent },
  { path: 'cadastro', component: HomeCadastroComponent },
]
