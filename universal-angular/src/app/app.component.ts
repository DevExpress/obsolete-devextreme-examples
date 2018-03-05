import { Component } from '@angular/core';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NavigationService]
})
export class AppComponent {

  navigation: NavigationService;

  constructor(navigationService: NavigationService) {
    this.navigation = navigationService;
  }

}
