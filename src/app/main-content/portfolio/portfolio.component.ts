import { Component } from '@angular/core';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    projects = [
        {
            id: '01',
            title: 'Join',
            description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            image: './assets/img/portfolio/join.png',
            github: 'https://github.com/yourrepo/join',
            live: 'https://yourliveapp.com/join'
        },
        {
            id: '02',
            title: 'El Pollo Loco',
            description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: './assets/img/portfolio/elPolloLoco.png',
            github: 'https://github.com/Denisator82/El-Pollo-Loco',
            live: 'https://denis-welsch.developerakademie.net/modul12_el_pollo_loco/'
        },
        {
            id: '03',
            title: 'Pokedex',
            description: 'Based on the PokéAPI, a straightforward library that offers and organizes Pokémon information.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: './assets/img/portfolio/pokedex.png',
            github: 'https://github.com/Denisator82/pokedex',
            live: 'https://denis-welsch.developerakademie.net/modul09_pokedex/'
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

