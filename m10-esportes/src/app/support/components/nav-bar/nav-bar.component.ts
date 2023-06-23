import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass'],
  standalone: true
})
export class NavBarComponent {

  constructor(private router: Router) { }

  navigate(title: string){
    switch(title){
      case "sobre":
        this.router.navigateByUrl("/portal/sobre");
        break
      case "turmas":
        this.router.navigateByUrl("/portal/turmas");
        break
      case "contato":
        this.router.navigateByUrl("/portal/contato");
        break
      case "equipe":
        this.router.navigateByUrl("/portal/equipe");
        break
      default:
        this.router.navigateByUrl("/portal");
        break
    }
  }
}
