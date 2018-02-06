import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe App';
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDRHt3wGrZqRIZQbpeViLquWqdz3FwM_vk',
      authDomain: 'recipe-app-f6848.firebaseapp.com'
 
    });
  }

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
