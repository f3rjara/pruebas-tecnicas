import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconForTypeComponent } from '../../ions/icon-for-type/icon-for-type.component';
import { NavbarLinkComponent } from './../../atoms/navbar-link/navbar-link.component';
import { SwitchThemeComponent } from './../../atoms/switch-theme/switch-theme.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        IconForTypeComponent,
        NavbarLinkComponent,
        SwitchThemeComponent
      ],
      imports: [CommonModule, RouterModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería ser creado', () => {
    expect(component).toBeTruthy();
  });
});
