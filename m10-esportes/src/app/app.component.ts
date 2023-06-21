import { ModalService } from './support/components/modal/service/modal.service';
import { Component } from '@angular/core';
import { TeamModalComponent } from './support/components/team-modal/team-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'm10-esportes';
  name = 'prof. wladimir januário';
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis vehicula fermentum.';
  categories = [
    { slug: '/assets/icons/fut7.svg', name: 'Fut7' },
    { slug: '/assets/icons/personal.svg', name: 'Personal Soccer' },
  ];
  image = '';

  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService
      .open(TeamModalComponent, {
        name: this.name,
        description: this.description,
        categories: this.categories,
        image: this.image,
      })
      .subscribe();
  }
}
