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
    { name: 'John Wayne - Team Partner', text: 'Denis has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project. '},
    { name: 'Jane Smith - Mentor', text: 'I had the good fortune of working with Denis in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He is super knowledgeable, easy to work with, and I happily work with him again given the chance.'},
    { name: 'T.Schulz - Frontend Developer', text:'Our project benefited enormously from Denis efficient way of working.'}
  ];
  currentIndex = 0;

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
