import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Standalone Component Imports */
import { IconForTypeComponent } from '../../ions/icon-for-type/icon-for-type.component';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [CommonModule, IconForTypeComponent],
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent {
  activateThemeDark: boolean;

  constructor() {
    this.activateThemeDark = false;
  }

  changeSwitch() {
    this.activateThemeDark = !this.activateThemeDark;
    // if activateThemeDark is true add class dark-theme to body
    if (this.activateThemeDark) {
      document.body.classList.add('theme--dark');
    }
    // if activateThemeDark is false remove class dark-theme to body
    else {
      document.body.classList.remove('theme--dark');
    }
  }
}
