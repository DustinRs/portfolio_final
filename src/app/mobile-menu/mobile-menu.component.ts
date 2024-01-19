import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss'
})
export class MobileMenuComponent {
  menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
}
