import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', logo: './assets/img/skillSet/html.png' },
    { name: 'CSS', logo: './assets/img/skillSet/css.png' },
    { name: 'JavaScript', logo: './assets/img/skillSet/javascript.png' },
    { name: 'Material Design', logo: './assets/img/skillSet/frame.png' },
    { name: 'TypeScript', logo: './assets/img/skillSet/ts.png' },
    { name: 'Angular', logo: './assets/img/skillSet/angular.png' },
    { name: 'Firebase', logo: './assets/img/skillSet/firebase.png' },
    { name: 'GIT', logo: './assets/img/skillSet/git.png' },
    { name: 'Rest-Api', logo: './assets/img/skillSet/api.png' },
    { name: 'Scrum', logo: './assets/img/skillSet/scrum.png' },
    { name: 'Growth Mindset', logo: './assets/img/skillSet/tech.png' }
  ];
}
