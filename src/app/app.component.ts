import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { IamComponent } from './iam/iam.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDocs,
  setDoc,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    IamComponent,
    AboutmeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  date: Date = new Date();

  constructor() {
    const aCollection = collection(this.firestore, 'Besucher');
    this.items$ = collectionData(aCollection);
  }

  async ngOnInit() {
    let id = Date.now().toString();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedDate: string = new Intl.DateTimeFormat(
      'de-DE',
      options
    ).format(this.date);
    await setDoc(doc(this.firestore, 'Besucher', id), {
      Besucht_am: formattedDate,
    });
  }
}
