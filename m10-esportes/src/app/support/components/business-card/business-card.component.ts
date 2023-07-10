import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class BusinessCardComponent implements OnInit {
  @Input() info = [
    {
      name: 'LOREM IPSUN',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis vehicula fermentum. Nullam aliquam elit vel libero maximus egestas eu in lectus. ',
      img: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
