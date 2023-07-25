import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconForTypeComponent } from '../../ions/icon-for-type/icon-for-type.component';

@Component({
  selector: 'app-bookmark-button',
  standalone: true,
  imports: [CommonModule, IconForTypeComponent],
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.scss']
})
export class BookmarkButtonComponent {

}
