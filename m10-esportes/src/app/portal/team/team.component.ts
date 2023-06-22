import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass'],
})
export class TeamComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  get data() {
    let title = this.router.snapshot['data'];
    return title['name'];
  }

  ngOnInit(): void {}
}
