import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import * as AuthActions from './store/auth.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
@Injectable()
export class AuthService {
    token: string;
    constructor(private router: Router, private store: Store<fromApp.AppState>) {}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            user => {
                this.store.dispatch(new AuthActions.Signup());
                firebase.auth().currentUser.getToken()
                    .then(
                    (token: string) => this.token = token
                    );
            }
        )
            .catch(
            error => console.error(error)
            );
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                    .then(
                    (token: string) => this.token = token
                    );
            })
            .catch(
            error => console.error(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then(
            (token: string) => this.token = token
            );
         return this.token;
    }
    isAuthenticated() {
        return this.token != null;
    }

}
