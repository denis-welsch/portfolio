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
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {}

  changeLanguage() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'de';
    } else {
      this.currentLanguage = 'en';
    }
    this.translate.use(this.currentLanguage);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

