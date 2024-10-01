import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { LayoutModule } from './layout/layout.module';
import { SidenavComponent } from "./layout/sidenav/sidenav.component";
import { MainComponent } from "./layout/main/main.component";

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
  }
];

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeModule,
    LayoutModule,
    SidenavComponent,
    MainComponent
],
  providers: [],
  bootstrap: []
})
export class AppModule { }
