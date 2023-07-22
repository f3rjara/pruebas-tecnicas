import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Subscription, BehaviorSubject } from 'rxjs';
import { ThemeService } from './../../../core/services/theme.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let themeService: ThemeService;
  let activateThemeDark$: BehaviorSubject<boolean>;

  beforeEach(async () => {
    activateThemeDark$ = new BehaviorSubject<boolean>(false);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: ThemeService,
          useValue: {
            getActivateThemeDark: activateThemeDark$.asObservable(),
            updateTheme: jasmine.createSpy('updateTheme')
          }
        }
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    fixture.detectChanges();
  });

  afterEach(() => {
    activateThemeDark$.complete();
  });

  it('debería ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('debería suscribirse al Observable del tema', () => {
    expect(component.activateThemeDarkSuscribe instanceof Subscription).toBe(true);
  });

  it('debería establecer activateThemeDark en false al inicio', () => {
    expect(component.activateThemeDark).toBe(false);
  });

  it('debería actualizar el tema al iniciar el componente', () => {
    expect(themeService.updateTheme).toHaveBeenCalledWith(component.activateThemeDark);
  });

  it('debería actualizar activateThemeDark cuando cambie el tema', () => {
    activateThemeDark$.next(true);
    expect(component.activateThemeDark).toBe(true);
  });

  it('debería llamar a unsubscribe() en ngOnDestroy', () => {
    spyOn(component.activateThemeDarkSuscribe, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.activateThemeDarkSuscribe.unsubscribe).toHaveBeenCalled();
  });
});
