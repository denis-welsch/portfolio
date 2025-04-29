import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [TranslatePipe, TranslateDirective],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    projects = [
        {
            id: '01',
            title: 'Join',
            description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            technologie: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            technologies: [
                { name: 'Angular', logo: './assets/img/skillSet/angular.svg' },
                { name: 'TypeScript', logo: './assets/img/skillSet/typescript.svg' },
                { name: 'HTML', logo: './assets/img/skillSet/html.svg' },
                { name: 'CSS', logo: './assets/img/skillSet/css.svg' },
                { name: 'Firebase', logo: './assets/img/skillSet/firebase.svg' }
                ],
            image: './assets/img/portfolio/join.png',
            github: 'https://github.com/Denisator82/join',
            live: 'https://denis-welsch.de/modul_join/index.html'
        },
        {
            id: '02',
            title: 'El Pollo Loco',
            description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
            technologie: ['HTML', 'CSS', 'JavaScript'],
            technologies: [
                { name: 'HTML', logo: './assets/img/skillSet/html.svg' },
                { name: 'CSS', logo: './assets/img/skillSet/css.svg' },
                { name: 'JavaScript', logo: './assets/img/skillSet/javascript.svg' }
                ],
            image: './assets/img/portfolio/elPolloLoco.png',
            github: 'https://github.com/Denisator82/El-Pollo-Loco',
            live: 'https://denis-welsch.de/modul_el_pollo_loco/index.html'
        },
        {
            id: '03',
            title: 'Pokedex',
            description: 'This Pokedex project uses the PokéAPI to fetch and display Pokémon information dynamically with HTML, CSS, and JavaScript.', 
            technologie: ['HTML', 'CSS', 'JavaScript', 'Rest-Api'],
            technologies: [
                { name: 'HTML', logo: './assets/img/skillSet/html.svg' },
                { name: 'CSS', logo: './assets/img/skillSet/css.svg' },
                { name: 'JavaScript', logo: './assets/img/skillSet/javascript.svg'},
                { name: 'Rest-API', logo: './assets/img/skillSet/rest-api.svg' }
                ],
            image: './assets/img/portfolio/pokedex.png',
            github: 'https://github.com/Denisator82/pokedex',
            live: 'https://denis-welsch.de/modul_pokedex/index.html'
        }
    ];

    hoveredProject: any = null;
    selectedProject: any = null;

    hoverProject(project: any) {
        this.hoveredProject = project;
    }

    openProject(project: any) {
        this.selectedProject = project;
    }

    closeProject() {
        this.selectedProject = null;
    }

    openLink(url: string): void {
        if (url) {
            window.open(url, '_blank');
        } else {
            console.error('Keine URL gefunden!');
        }
    }

    openNextProject() {
        const currentIndex = this.projects.findIndex(project => project.id === this.selectedProject.id);
        const nextProject = this.projects[(currentIndex + 1) % this.projects.length]; // Zirkuliert durch die Projekte
        this.selectedProject = nextProject;
    }
}