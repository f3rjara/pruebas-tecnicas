import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-linkedin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-linkedin.component.svg',
  styleUrls: ['./icon-linkedin.component.scss']
})
export class IconLinkedinComponent {
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
