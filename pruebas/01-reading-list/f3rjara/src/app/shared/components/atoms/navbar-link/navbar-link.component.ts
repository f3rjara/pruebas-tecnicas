import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.scss']
})
export class NavbarLinkComponent {
  @Input() href: string;
  @Input() title: string;
  @Input() target: string;
  @Input() external: boolean;

  constructor() {
    this.href = '#';
    this.title = '';
    this.target = '_self';
    this.external = false;
  }
}
