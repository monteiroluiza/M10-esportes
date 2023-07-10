import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalService } from '../modal/service/modal.service';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class TeamModalComponent {
  @Input() info = {
    name: '',
    description: '',
    img: '',
    categories: [
      {
        slug: '',
        name: '',
      },
    ],
  };

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.close();
  }
}
