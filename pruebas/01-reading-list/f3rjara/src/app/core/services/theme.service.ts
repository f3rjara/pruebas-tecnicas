import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * @description Este servicio se utiliza para administrar el tema de la aplicación.
 * @export
 * @class ThemeService
*/
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  /**
   * @description Esta es la clave que se utilizará para almacenar el tema en el localstorage.
   * @private
   * @type {string}
   * @memberof ThemeService
   */
  private readonly darkThemeKey = 'activateThemeDark';

  /**
   * @description Esta es la clave que se utilizará para almacenar el evento en el localstorage.
   * @private
   * @type {string}
   * @memberof ThemeService
  */
  private readonly storageEventKey = '__themeChanged__';

  constructor() {
    window.addEventListener('storage', this.onStorageChange.bind(this));
  }

  /**
   * @description Este es el observable que se utilizará para suscribirse a los cambios en el tema.
   * @private
   * @type {BehaviorSubject<boolean>}
   * @memberof ThemeService
  */
  private activateThemeDark$ = new BehaviorSubject<boolean>(false);

  /**
   * @description Este es el observable que se utilizará para suscribirse a los cambios en el tema.
   * @readonly
   * @type {Observable<boolean>}
   * @memberof ThemeService
  */
  get getActivateThemeDark(): Observable<boolean> {
    const isDarkThemeActive  = localStorage.getItem(this.darkThemeKey) === 'true';
    this.activateThemeDark$.next(isDarkThemeActive );
    return this.activateThemeDark$;
  }

  /**
   * @description Este método se utiliza para actualizar el tema  con persistencia en el localstorage.
   * @param {boolean} isDarkThemeActive
   * @memberof ThemeService
   * @returns {void}
   * @example updateTheme(true) // Activará el tema oscuro.
  */
  updateTheme(isDarkThemeActive: boolean): void {
    if (isDarkThemeActive) {
      document.body.classList.add('theme--dark');
      localStorage.setItem(this.storageEventKey, 'themeChanged_dark');
    } else {
      document.body.classList.remove('theme--dark');
      localStorage.setItem(this.storageEventKey, 'themeChanged_light');
    }
    localStorage.setItem(this.darkThemeKey, isDarkThemeActive ? 'true' : 'false');
    this.activateThemeDark$.next(isDarkThemeActive);
  }

  /**
   * @description Este método se utiliza para actualizar el tema  con persistencia en el localstorage.
   * @param {StorageEvent} event
   * @memberof ThemeService
   * @returns {void}
   * @example onStorageChange(event) // Activará el tema oscuro.
  */
  private onStorageChange(event: StorageEvent): void {
    if (event.key === this.storageEventKey) {
      const isDarkTheme = event.newValue === 'themeChanged_dark';
      this.updateTheme(isDarkTheme);
    }
  }
}
