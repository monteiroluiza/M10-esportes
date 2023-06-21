import { Component } from '@angular/core';
import { ModalService } from './support/components/modal/service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'm10-esportes';
  constructor(private modalService: ModalService){-}

  openModal(title: string, description: string) {
    this.modalService
      .open(AppComponent, {})
      .subscribe();
  }
}
