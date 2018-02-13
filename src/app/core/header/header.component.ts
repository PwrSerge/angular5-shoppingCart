import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as RecipeActions from '../../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    authState: Observable<fromAuth.State>;
    showMenu = false;

    constructor(private store: Store<fromApp.AppState>) {
    }

    ngOnInit() {
        this.authState = this.store.select('auth');
    }

    onSaveData() {
        this.store.dispatch(new RecipeActions.StoreRecipes());
    }
    setDropdownMenu() {
        if (this.showMenu) {
            return 'show';
        } else {
            return '';
        }
    }

    onFetchData() {
        this.store.dispatch(new RecipeActions.FetchRecipes());
    }

    onLogout() {
        this.store.dispatch(new AuthActions.Logout());
    }
}


