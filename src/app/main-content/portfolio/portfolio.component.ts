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
            description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'
                // {name:'Angular', icon: './assets/icons/Angular_Vector.png'},
                // {name:'TypeScript', icon: './assets/icons/TS_Vector.png'},
                // {name:'HTML', icon: './assets/icons/HTML_Vector.png'},
                // {name:'CSS', icon: './assets/icons/CSS_Vector.png'},
                // {name:'Firebase',icon: './assets/icons/Firebase_Vector.png'}
            ],
            image: './assets/img/portfolio/join.png',
            github: 'https://github.com/yourrepo/join',
            live: 'https://yourliveapp.com/join'
        },
        {
            id: '02',
            title: 'El Pollo Loco',
            description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
            technologies: ['HTML', 'CSS', 'JavaScript'
                // {name:'HTML', icon: './assets/icons/HTML_Vector.png'},
                // {name:'CSS', icon: './assets/icons/CSS_Vector.png'},
                // {name:'JavaScript', icon: './assets/icons/Javascript_Vector.png'}
            ],
            image: './assets/img/portfolio/elPolloLoco.png',
            github: 'https://github.com/Denisator82/El-Pollo-Loco',
            live: 'https://denis-welsch.developerakademie.net/modul12_el_pollo_loco/'
        },
        {
            id: '03',
            title: 'DABubble',
            description: 'A Slack Clone for team collaboration...',
            technologies: ['Angular', 'Firebase', 'TypeScript'
                // {name:'Angular', icon: './assets/icons/Angular_Vector.png'},
                // {name:'Firebase',icon: './assets/icons/Firebase_Vector.png'},
                // {name:'TypeScript', icon: './assets/icons/TS_Vector.png'}
            ],
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

    openLink(url: string): void {
        if (url) {
        window.open(url, '_blank');
        } else {
        console.error('Keine URL gefunden!');
        }
    }
}
