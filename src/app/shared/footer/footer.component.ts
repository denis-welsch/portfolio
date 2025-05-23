import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [RouterModule, TranslateDirective, TranslatePipe],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
