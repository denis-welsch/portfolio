import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
    /**
   * Injects the Location service to handle navigation.
   * @param location The Location service.
   */
    constructor(private location: Location) { }

    /**
     * Navigates the user back to the previous page in the browser history.
     */
    backPage() {
      this.location.back();
    }
}
