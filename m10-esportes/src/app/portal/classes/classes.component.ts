import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.sass'],
})
export class ClassesComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  get data() {
    let title = this.router.snapshot['data'];
    return title['name'];
  }

  ngOnInit(): void {}
}
