import { Component } from '@angular/core/';
import { DataStorageService } from '../common/data-storage.service';
import { Response } from '@angular/http/';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    showMenu = false;

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) { }

    setDropdownMenu() {
        if (this.showMenu) {
            return 'show';
        } else {
            return '';
        }
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
            (response: Response) => {
                console.log(response);
            }
            );
    }
    onLogout() {
        this.authService.logout();

    }
    onFetchData() {
        this.dataStorageService.getRecipes();
    }

}
