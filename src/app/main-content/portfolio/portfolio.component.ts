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
            id: 1,
            title: 'Join',
            description: 'Task manager inspired by the Kanban System...',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
            image: './assets/img/portfolio/join.png',
            github: 'https://github.com/yourrepo/join',
            live: 'https://yourliveapp.com/join'
        },
        {
            id: 2,
            title: 'El Pollo Loco',
            description: 'Jump and run game based on object-oriented programming...',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            image: './assets/img/portfolio/elPolloLoco.png',
            github: 'https://github.com/Denisator82/El-Pollo-Loco',
            live: 'https://denis-welsch.developerakademie.net/modul12_el_pollo_loco/'
        },
        {
            id: 3,
            title: 'DABubble',
            description: 'A Slack Clone for team collaboration...',
            technologies: ['Angular', 'Firebase', 'TypeScript'],
            image: './assets/img/portfolio/daBubble.png',
            github: 'https://github.com/yourrepo/dabubble',
            live: 'https://yourliveapp.com/dabubble'
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
}
