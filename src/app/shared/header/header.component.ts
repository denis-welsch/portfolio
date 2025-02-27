import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string) {
    this.translate.use(language);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
