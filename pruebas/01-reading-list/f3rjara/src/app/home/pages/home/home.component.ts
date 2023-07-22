import { Component, OnDestroy, inject } from '@angular/core';
import { ThemeService } from './../../../core/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
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
}
