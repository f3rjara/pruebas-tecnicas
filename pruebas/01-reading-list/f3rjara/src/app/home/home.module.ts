import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
/* pages */
import { HomeComponent } from './pages/home/home.component';
/* Standalone components */
import { NavbarComponent } from '@molecules/navbar/navbar.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent
  ]
})
export class HomeModule { }
