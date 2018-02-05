import { Component } from '@angular/core/';
import { DataStorageService } from '../common/data-storage.service';
import { Response } from '@angular/http/';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    showMenu = false;

    constructor(private dataStorageService: DataStorageService) {}

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

    onFetchData() {
        this.dataStorageService.getRecipes();
    }

}
