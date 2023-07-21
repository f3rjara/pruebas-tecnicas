import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-switch-off',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-switch-off.component.svg',
  styleUrls: ['./icon-switch-off.component.scss']
})
export class IconSwitchOffComponent {
  @Input() width: string;
  @Input() height: string;
  @Input() fill: string;
  @Input() stroke: string;

  constructor() {
    this.width = '24px';
    this.height = '24px';
    this.fill = 'none';
    this.stroke = 'currentColor';
  }
}
