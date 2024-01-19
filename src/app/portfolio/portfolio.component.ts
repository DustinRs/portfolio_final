import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements AfterViewInit {
  @ViewChild('overlayImgDemon') overlayImgDemon!: ElementRef;
  @ViewChild('overlayImgJoin') overlayImgJoin!: ElementRef;
  @ViewChild('overlayImgPoke') overlayImgPoke!: ElementRef;
  @ViewChild('overlayImgCRM') overlayImgCRM!: ElementRef;
  @ViewChild('imgDemon') imgDemon!: ElementRef;
  @ViewChild('imgJoin') imgJoin!: ElementRef;
  @ViewChild('imgPoke') imgPoke!: ElementRef;
  @ViewChild('imgCRM') imgCRM!: ElementRef;
  isMouseOver: boolean = false;
  isMouseLeave: boolean = true;
  ngAfterViewInit() {}

  showOverlayDemon() {
    if (this.isMouseLeave) {
      this.overlayImgDemon.nativeElement.classList.remove('d-none');
      this.imgDemon.nativeElement.classList.add('zoom');
      this.isMouseOver = true;
    }
  }
  hideOverlayDemon() {
    if (this.isMouseOver) {
      this.overlayImgDemon.nativeElement.classList.add('d-none');
      this.imgDemon.nativeElement.classList.remove('zoom');
      this.isMouseLeave = true;
    }
  }
  showOverlayJoin() {
    if (this.isMouseLeave) {
      this.overlayImgJoin.nativeElement.classList.remove('d-none');
      this.imgJoin.nativeElement.classList.add('zoom');
      this.isMouseOver = true;
    }
  }
  hideOverlayJoin() {
    if (this.isMouseOver) {
      this.overlayImgJoin.nativeElement.classList.add('d-none');
      this.imgJoin.nativeElement.classList.remove('zoom');
      this.isMouseLeave = true;
    }
  }
  showOverlayPoke() {
    if (this.isMouseLeave) {
      this.overlayImgPoke.nativeElement.classList.remove('d-none');
      this.imgPoke.nativeElement.classList.add('zoom');
      this.isMouseOver = true;
    }
  }
  hideOverlayPoke() {
    if (this.isMouseOver) {
      this.overlayImgPoke.nativeElement.classList.add('d-none');
      this.imgPoke.nativeElement.classList.remove('zoom');
      this.isMouseLeave = true;
    }
  }
  showOverlayCRM() {
    if (this.isMouseLeave) {
      this.overlayImgCRM.nativeElement.classList.remove('d-none');
      this.imgCRM.nativeElement.classList.add('zoom');
      this.isMouseOver = true;
    }
  }
  hideOverlayCRM() {
    if (this.isMouseOver) {
      this.overlayImgCRM.nativeElement.classList.add('d-none');
      this.imgCRM.nativeElement.classList.remove('zoom');
      this.isMouseLeave = true;
    }
  }
}
