import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../atoms/image-book/image.component';
import { BookmarkButtonComponent } from '../../atoms/bookmark-button/bookmark-button.component';
import { FeatureItemComponent } from '../../atoms/feature-item/feature-item.component';

@Component({
  selector: 'app-single-book',
  standalone: true,
  imports: [ BookmarkButtonComponent, CommonModule, FeatureItemComponent, ImageComponent],
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent {

}
