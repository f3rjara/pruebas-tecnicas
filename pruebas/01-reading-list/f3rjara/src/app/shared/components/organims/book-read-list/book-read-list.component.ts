import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../atoms/image-book/image.component';
import { SingleBookComponent } from '../../molecules/single-book/single-book.component';

@Component({
  selector: 'app-book-read-list',
  standalone: true,
  imports: [CommonModule, ImageComponent, SingleBookComponent],
  templateUrl: './book-read-list.component.html',
  styleUrls: ['./book-read-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookReadListComponent {

}
