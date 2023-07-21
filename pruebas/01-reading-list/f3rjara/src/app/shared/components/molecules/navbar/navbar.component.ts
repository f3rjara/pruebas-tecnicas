import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Standalone Component Imports */
import { IconGithubComponent } from '@ions/icon-github/icon-github.component';
import { IconLinkedinComponent } from '@ions/icon-linkedin/icon-linkedin.component';
import { IconWebComponent } from '@ions/icon-web/icon-web.component';
import { NavbarLinkComponent } from '@atoms/navbar-link/navbar-link.component';
import { SwitchThemeComponent } from '@atoms/switch-theme/switch-theme.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    IconGithubComponent,
    IconLinkedinComponent,
    IconWebComponent,
    NavbarLinkComponent,
    RouterModule,
    SwitchThemeComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
