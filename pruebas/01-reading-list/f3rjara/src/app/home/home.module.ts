import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
/* pages */
import { HomeComponent } from './pages/home/home.component';
/* Standalone components */
import { NavbarComponent } from '@molecules/navbar/navbar.component';
import { BookReadListComponent } from './../shared/components/organims/book-read-list/book-read-list.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarComponent,
    BookReadListComponent
  ]
})
export class HomeModule { }
