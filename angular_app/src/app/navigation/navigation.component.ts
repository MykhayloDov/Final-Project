import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck {
disabled = false;
  constructor() { }

  ngDoCheck() {
    if (localStorage.getItem('Admin') === null) {
      this.disabled = true;
    } else {
    this.disabled = false;
    }
  }

}
