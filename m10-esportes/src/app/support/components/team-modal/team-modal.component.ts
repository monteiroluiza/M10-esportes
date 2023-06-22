import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal/service/modal.service';

@Component({
  selector: 'app-team-modal',
  templateUrl: './team-modal.component.html',
  styleUrls: ['./team-modal.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class TeamModalComponent {
  @Input() name = '';
  @Input() description = '';
  @Input() categories = [{ slug: '', name: '' }];
  @Input() image = '';

  content: any = {}
  constructor(private modalService: ModalService) {}

  ngOnInit(){
    this.content = {
      name: this.name,
      description: this.description,
      categories: this.categories,
      image: this.image,
    };
  }

  closeModal() {
    this.modalService.close();
  }
}
