import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Standalone Component Imports */
import { IconForTypeComponent } from '../../ions/icon-for-type/icon-for-type.component';
import { ThemeService } from '@core/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-switch-theme',
  standalone: true,
  imports: [CommonModule, IconForTypeComponent],
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.scss']
})
export class SwitchThemeComponent implements OnDestroy {

  activateThemeDarkSuscribe: Subscription;
  activateThemeDark!: boolean;

  private _themeService = inject(ThemeService);

  constructor() {
    this.activateThemeDarkSuscribe = this._themeService.getActivateThemeDark
      .subscribe((status: boolean) => {
        this.activateThemeDark = status;
      });

    this._themeService.updateTheme(this.activateThemeDark);
  }

  ngOnDestroy(): void {
    this.activateThemeDarkSuscribe.unsubscribe();
  }

  changeSwitch() {
    this.activateThemeDark = !this.activateThemeDark;
    this._themeService.updateTheme(this.activateThemeDark);
  }

}
