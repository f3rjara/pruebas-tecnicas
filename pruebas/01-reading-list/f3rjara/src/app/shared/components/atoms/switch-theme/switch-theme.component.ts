import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Standalone Component Imports */
import { IconSwitchOffComponent } from '@ions/icon-switch-off/icon-switch-off.component';
import { IconSwitchOnComponent } from '@ions/icon-switch-on/icon-switch-on.component';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [CommonModule, IconSwitchOffComponent, IconSwitchOnComponent],
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
