import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  get data(){
    let title = this.router.snapshot['data']
    return title['name']
  }

  ngOnInit(): void {
  }

}
