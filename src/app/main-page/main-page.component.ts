import { Component } from '@angular/core';
import { IamComponent } from '../iam/iam.component';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [IamComponent, AboutmeComponent,SkillsComponent,PortfolioComponent,ContactComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
