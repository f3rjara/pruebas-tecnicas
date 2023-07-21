import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-github',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-github.component.svg',
  styleUrls: ['./icon-github.component.scss']
})
export class IconGithubComponent {
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
