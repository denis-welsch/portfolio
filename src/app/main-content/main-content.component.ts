import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    AboutMeComponent,
    ContactformComponent,
    HeroComponent,
    PortfolioComponent,
    ReferencesComponent,
    SkillsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
