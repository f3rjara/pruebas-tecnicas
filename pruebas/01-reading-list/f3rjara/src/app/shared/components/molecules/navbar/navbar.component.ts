import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Standalone Component Imports */
import { NavbarLinkComponent } from './../../atoms/navbar-link/navbar-link.component';
import { SwitchThemeComponent } from './../../atoms/switch-theme/switch-theme.component';
import { IconForTypeComponent } from '../../ions/icon-for-type/icon-for-type.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    IconForTypeComponent,
    NavbarLinkComponent,
    RouterModule,
    SwitchThemeComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
