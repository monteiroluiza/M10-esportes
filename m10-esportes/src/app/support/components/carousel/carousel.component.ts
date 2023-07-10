import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass'],
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent {
  @ViewChild('container') containerRef!: ElementRef;

  wrapper!: HTMLElement;
  @ContentChildren('element', { read: ElementRef }) elements!: QueryList<any>;
  @Input() options!: {
    uniqueId: string;
    isUnique?: boolean;
    doAutoScroll?: boolean;
    isArrowsInside?: boolean;
    scrollDelay?: number;
    isGalleryMode?: boolean;
    isNewsMode?: boolean;
    isBanner?: boolean;
  };

  @Output() emitIndex: EventEmitter<number> = new EventEmitter();

  private carousel!: HTMLElement;
  private carouselWidth!: number;

  private roll!: HTMLElement;

  private cardWidth!: number;
  private cardsGap!: number;

  private elementWidth!: number;

  @Input() indexElement: number = 0;
  private pages!: number;
  private elementsPerPage: number = 4;

  private timer!: any;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit() {
    this.startTimer();
  }

  ngAfterViewInit(): void {
    this.initializeWidthCarousel();
    this.checkLimitScroll();
  }

  startTimer() {
    if (this.options.doAutoScroll) {
      this.timer = setInterval(
        () => {
          this.nextElement();
        },
        this.options.scrollDelay ? this.options.scrollDelay : 2500
      );
    }
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  resetTimer() {
    this.stopTimer();
    this.startTimer();
  }

  initializeWidthCarousel() {
    this.wrapper = document.querySelector(
      '#' + this.options.uniqueId
    ) as HTMLElement;

    this.carousel = this.wrapper.querySelector('.carousel') as HTMLElement;
    this.roll = this.wrapper.querySelector('.roll') as HTMLElement;

    this.roll.style.padding = '0';
    this.elementsPerPage = 4;

    if (this.options.isUnique) {
      this.elementWidth =
        this.containerRef.nativeElement.parentElement.getBoundingClientRect()
          .width / 16;

      this.containerRef.nativeElement.style.width =
        String(this.elementWidth) + 'rem';
      this.setSizeAllElements();
      this.carousel.style.width = String(this.elementWidth) + 'rem';
    }
    this.cardWidth =
      this.elements.get(0).nativeElement.getBoundingClientRect().width / 16;

    if (!this.cardWidth) this.cardWidth = 12.5; //fallback

    this.carouselWidth =
      this.carousel.parentElement!.getBoundingClientRect().width / 16;

    if (!this.options.isArrowsInside) {
      // if (
      //   this.roll.getBoundingClientRect().width / 16 + 1 <=
      //   this.carouselWidth
      // ) {
      //   this.renderer.setStyle(
      //     this.containerRef.nativeElement.childNodes[0],
      //     'opacity',
      //     '0'
      //   );
      //   this.renderer.setStyle(
      //     this.containerRef.nativeElement.childNodes[3],
      //     'opacity',
      //     '0'
      //   );
      // } else {
      //   this.renderer.setStyle(
      //     this.containerRef.nativeElement.childNodes[0],
      //     'opacity',
      //     '1'
      //   );
      //   this.renderer.setStyle(
      //     this.containerRef.nativeElement.childNodes[3],
      //     'opacity',
      //     '1'
      //   );
      // }
      this.carouselWidth -= 6;
    }
    this.carousel.style.width = String(this.carouselWidth) + 'rem';

    while (this.cardWidth * this.elementsPerPage > this.carouselWidth)
      this.elementsPerPage--;

    if (this.elementsPerPage <= 1) {
      this.cardsGap =
        (this.carouselWidth - this.cardWidth * this.elementsPerPage) /
        this.elementsPerPage;
      this.roll.style.padding = '0 ' + String(this.cardsGap / 2) + 'rem';
    } else {
      this.cardsGap =
        (this.carouselWidth - this.cardWidth * this.elementsPerPage) /
        (this.elementsPerPage - 1);
    }

    this.pages = this.elements.length - this.elementsPerPage + 1;

    if (this.options.isNewsMode) {
      if (window.screen.width > 576) {
        this.elementsPerPage = 3;
        this.cardsGap =
          (this.carouselWidth - this.cardWidth * this.elementsPerPage) /
            this.elementsPerPage -
          1;
      } else {
        this.elementsPerPage = 1;
        this.cardsGap = 0.5;
      }
    }

    if (this.options.isGalleryMode) {
      if (window.screen.width > 992) {
        this.elementsPerPage = 4;
        this.cardsGap =
          (this.carouselWidth - this.cardWidth * this.elementsPerPage) /
            this.elementsPerPage -
          0.6;
      } else if (window.screen.width < 768 && window.screen.width > 576) {
        this.elementsPerPage = 3;
        this.cardsGap =
          (this.carouselWidth - this.cardWidth * this.elementsPerPage) /
            this.elementsPerPage -
          0.6;
      } else {
        this.elementsPerPage = 1;
        this.cardsGap = 0.5;
      }
    }

    this.roll.style.columnGap = String(this.cardsGap) + 'rem';
  }

  setSizeAllElements() {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements.get(i).nativeElement.style.width =
        String(this.elementWidth) + 'rem';
    }
  }

  nextElement() {
    this.resetTimer();

    this.indexElement++;
    this.checkLimitScroll();
  }

  prevElement() {
    this.resetTimer();

    if (this.indexElement <= -this.pages)
      this.indexElement += this.elements.length;

    this.indexElement--;
    this.checkLimitScroll();
  }

  setSelectedStyle() {
    this.elements.forEach((el) => {
      this.renderer['removeClass'](el.nativeElement, 'selected');
    });

    if (this.options.isGalleryMode) {
      if (this.indexElement >= 0 && this.indexElement < this.elements.length) {
        var toAddSelect = this.elements.get(this.indexElement).nativeElement;
        this.renderer['addClass'](toAddSelect, 'selected');
      }
    }
  }

  checkLimitScroll() {
    if (this.indexElement >= this.elements.length) {
      this.indexElement = 0;
    } else if (this.indexElement < 0) {
      this.indexElement = this.elements.length - 1;
    }

    if (this.options.isGalleryMode) {
      if (this.indexElement > this.elementsPerPage - 1) {
        this.roll.style.transform =
          'translateX(-' +
          String(
            (this.cardWidth + this.cardsGap) *
              (this.indexElement - this.elementsPerPage + 1)
          ) +
          'rem)';
      } else if (this.indexElement <= this.elementsPerPage) {
        this.roll.style.transform = 'translateX(0rem)';
      }
    } else {
      if (this.indexElement == this.elements.length - 1)
        this.indexElement = this.pages - 1;
      else if (this.indexElement >= this.pages) this.indexElement = 0;

      this.roll.style.transform =
        'translateX(-' +
        String((this.cardWidth + this.cardsGap) * this.indexElement) +
        'rem)';
    }

    this.setSelectedStyle();
    this.emitIndex.emit(this.indexElement);
  }
}
