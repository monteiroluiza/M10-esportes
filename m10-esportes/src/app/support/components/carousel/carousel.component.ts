import { Component, OnInit } from '@angular/core';
import {
  SlickCarouselModule,
  SlickCarouselComponent,
} from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  standalone: true,
  imports: [],
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
