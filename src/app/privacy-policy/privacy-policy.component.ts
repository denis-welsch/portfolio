import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router'; // Importiere ActivatedRoute

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit, AfterViewInit { // Implementiere OnInit und AfterViewInit

  /**
   * Injects the Location service to handle navigation, ActivatedRoute to get URL parameters,
   * ElementRef to access the component's element, and Renderer2 to manipulate the DOM.
   * @param location The Location service.
   * @param route The ActivatedRoute service.
   * @param el The ElementRef service.
   * @param renderer The Renderer2 service.
   */
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // Optional: Füge hier Initialisierungslogik hinzu, falls nötig
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'top') {
        const element = this.el.nativeElement.querySelector('#top');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0); // Fallback, falls #top nicht gefunden wird
        }
      }
    });
  }

  /**
   * Navigates the user back to the previous page in the browser history.
   */
  backPage() {
    this.location.back();
  }
}