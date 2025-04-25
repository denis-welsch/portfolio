import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  testimonials = [
    { name: 'Alex - Team Partner', text: 'Während unseres Projekts erwies Denis sich als sehr engagiertes und zuverlässiges Teammitglied. Stets lösungsorientiert, teilte er bereitwillig sein Wissen und unterstützte bei Herausforderungen. Seine positive Einstellung trug maßgeblich zum Erfolg unserer gemeinsamen Aufgabe bei. Die Zusammenarbeit mit ihm war sehr wertvoll.'},
    { name: 'Rainer Musch - Frontend Developer', text: 'Denis überzeugt durch außergewöhnliche Detailverliebtheit und höchste Präzision in der Umsetzung von CSS- und SCSS-Strukturen. Mit seinem ausgeprägten Sinn für sauberen, wartbaren Code optimiert er Stylesheets bis zur Perfektion. Seine Arbeit hebt die visuelle Qualität und Performance jedes Projekts deutlich an. Denis ist ein echter Perfektionist im Frontend-Bereich – zuverlässig, effizient und stets mit Blick fürs große Ganze.'},
    { name: 'M.Schmittay - Team Partner', text:'Die akribische und perfektionistische Arbeitsweise in der Frontend-Entwicklung war eine Bereicherung für unser gemeinsames Projekt. Sein Engagement, seine Zuverlässigkeit und seine lösungsorientierte Art trugen maßgeblich zum Erfolg bei. Seine positive Einstellung und Hilfsbereitschaft machten die Zusammenarbeit sehr angenehm.'}
  ];
  currentIndex = 0;

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }
}