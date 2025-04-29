import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}