import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-switch-on',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-switch-on.component.svg',
  styleUrls: ['./icon-switch-on.component.scss']
})
export class IconSwitchOnComponent {
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
