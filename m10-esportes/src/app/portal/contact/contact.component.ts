import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  get data(){
    let title = this.router.snapshot['data']
    return title['name']
  }

  ngOnInit(): void {
  }

}
