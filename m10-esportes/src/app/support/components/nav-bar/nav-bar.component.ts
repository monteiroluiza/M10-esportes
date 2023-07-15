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
        this.router.navigateByUrl("/sobre");
        break
      case "turmas":
        this.router.navigateByUrl("/turmas");
        break
      case "contato":
        this.router.navigateByUrl("/contato");
        break
      case "equipe":
        this.router.navigateByUrl("/equipe");
        break
      default:
        this.router.navigateByUrl("");
        break
    }
  }
}
