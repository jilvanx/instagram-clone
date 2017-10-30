import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyBr_x2a8nKlFLZPN8gSlP3yLnBqlTV6LPM",
      authDomain: "jta-instagram-clone-2e779.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-2e779.firebaseio.com",
      projectId: "jta-instagram-clone-2e779",
      storageBucket: "jta-instagram-clone-2e779.appspot.com",
      messagingSenderId: "723628583592"
    };

    firebase.initializeApp(config);
  }
}
