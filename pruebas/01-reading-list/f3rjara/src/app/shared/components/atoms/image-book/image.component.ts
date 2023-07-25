import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() source: string;
  @Input() title: string;

  constructor() {
    this.source = '/assets/images/nodisponible.png';
    this.title = 'Imagen no encontrada';
  }
}
