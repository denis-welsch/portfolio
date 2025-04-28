import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  /**
   * Creates an instance of ImprintComponent.
   * @param location The Angular Location service for interacting with the browser's history.
   */
  constructor(private location: Location) { }

  /**
   * Navigates the user back to the previous page in the browser's history.
   */
  backPage() {
    this.location.back();
  }
}