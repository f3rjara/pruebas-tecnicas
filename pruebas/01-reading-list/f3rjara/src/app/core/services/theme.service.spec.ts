import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    themeService = TestBed.inject(ThemeService);
  });

  it('debería ser creado', () => {
    expect(themeService).toBeTruthy();
  });

  it('debería inicializarse con el tema predeterminado', (done) => {
    themeService.getActivateThemeDark.subscribe((isDarkThemeActive) => {
      expect(isDarkThemeActive).toBe(false);
      done();
    });
  });

  it('debería actualizar el tema al llamar al método updateTheme', () => {
    spyOn(themeService['activateThemeDark$'], 'next');
    themeService.updateTheme(true);
    expect(themeService['activateThemeDark$'].next).toHaveBeenCalledWith(true);
  });

  it('debería establecer y obtener el tema correctamente en el LocalStorage', () => {
    themeService.updateTheme(true);
    expect(localStorage.getItem(themeService['darkThemeKey'])).toBe('true');
    themeService.updateTheme(false);
    expect(localStorage.getItem(themeService['darkThemeKey'])).toBe('false');
  });

  it('debería agregar la clase dark-theme al body cuando se llama a updateTheme(true)', () => {
    themeService.updateTheme(true);
    expect(document.body.classList.contains('theme--dark')).toBe(true);
  });

  it('debería eliminar la clase dark-theme del body cuando se llama a updateTheme(false)', () => {
    themeService.updateTheme(false);
    expect(document.body.classList.contains('theme--dark')).toBe(false);
  });
});
