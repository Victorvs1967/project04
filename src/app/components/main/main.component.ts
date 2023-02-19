import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  bgPosition: any;
  link?: HTMLElement;

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPosition = { backgroundPositionX: -380 + (.3 * window.pageYOffset) + 'px' };
  }

  scroll(link: HTMLElement) {
    link.scrollIntoView();
  }
}
