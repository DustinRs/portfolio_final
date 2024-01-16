import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  private handleDocumentClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('nav a')) {
      let allNavLinks = document.querySelectorAll('nav a');

      allNavLinks.forEach(function (link) {
        link.classList.remove('active');
      });
    }
  }

  /**
   * Ändert die Klasse der angeklickten Navigationselemente, um den aktiven Link zu markieren.
   * @param {string} id - Die ID des angeklickten Links.
   */
  isActive(id: string) {
    let activeLink = document.getElementById(id);

    let allNavLinks = document.querySelectorAll('nav a');

    allNavLinks.forEach(function (link) {
      link.classList.remove('active');
    });
    activeLink?.classList.add('active');
  }
}
