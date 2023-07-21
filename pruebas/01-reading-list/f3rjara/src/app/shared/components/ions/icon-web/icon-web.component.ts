import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-web.component.svg',
  styleUrls: ['./icon-web.component.scss']
})
export class IconWebComponent {
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
