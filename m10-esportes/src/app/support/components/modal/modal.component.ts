import { CommonModule } from '@angular/common';
import { Component, ComponentRef, ElementRef, EventEmitter, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
  imports: [CommonModule],
  standalone: true
})
export class ModalComponent<T> {
  @ViewChild('container', { read: ViewContainerRef }) entry?: ViewContainerRef;
  protected closed: boolean = false;
  onClose: EventEmitter<T> = new EventEmitter();
  componentRef!: ComponentRef<T>;
  constructor(private el: ElementRef) {}

  open<T>(component: Type<T>, data?: Partial<T>) {
    this.entry?.clear();
    this.el.nativeElement.style.display = 'block';
    this.componentRef = this.entry?.createComponent(
      component
    ) as ComponentRef<any>;

    Object.keys(data || {}).forEach((key: string) => {
      if (!key) return;
      (this.componentRef.instance as any)[key] = (data as any)[key];
    });
  }

  close() {
    this.entry?.clear();
    this.el.nativeElement.style.display = 'none';
    document.removeEventListener('click', () => {});
    this.onClose.emit(this.componentRef.instance);
  }
}
