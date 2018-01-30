import { Component } from '@angular/core/';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    showMenu = false;

    setDropdownMenu() {
        if (this.showMenu) {
            return 'show';
        } else {
            return '';
        }
    }

}
