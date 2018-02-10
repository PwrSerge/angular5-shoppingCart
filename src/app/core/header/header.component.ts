import { Component } from '@angular/core/';
/* import { HttpEvent } from '@angular/common/http'; */

import { DataStorageService } from '../../common/data-storage.service';
import { AuthService } from '../../auth/auth.service';



@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    showMenu = false;

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
    }

    onSaveData() {
        this.dataStorageService.storeRecipes()
            .subscribe(
            (response) => {
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
    
    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

}
