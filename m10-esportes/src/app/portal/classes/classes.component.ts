import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from 'src/app/support/components/carousel/carousel.component';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.sass'],
  standalone: true,
  imports: [CommonModule, CarouselComponent],
})
export class ClassesComponent implements OnInit {
  cards = [
    { title: 'FUT7', imgs: [''] },
    { title: 'FUNCIONAL', imgs: [''] },
  ];

  selectedTitle = 'LOREM IPSUN';
  selectedImgs = [''];

  constructor(private router: ActivatedRoute) {}

  get data() {
    let title = this.router.snapshot['data'];
    return title['name'];
  }

  ngOnInit(): void {}
}
