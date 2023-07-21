import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-for-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-for-type.component.svg',
  styleUrls: ['./icon-for-type.component.scss']
})
export class IconForTypeComponent {
  @Input() width: string;
  @Input() height: string;
  @Input() fill: string;
  @Input() stroke: string;
  @Input() name: string;

  constructor() {
    this.width = '24px';
    this.height = '24px';
    this.fill = 'none';
    this.stroke = 'currentColor';
    this.name = 'icon-web';
  }
}
