import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  // Variable zum Steuern des Hover-Zustands
  isHovered: boolean = false;

  // Methode, die den Hover-Zustand ändert
  onHover(state: boolean): void {
    this.isHovered = state;
  }
}
