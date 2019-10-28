import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SITE';
  counterValue = 1;
  private displayService: any;

  showModal(): void {
    this.displayService.setShowModal(true);
  }
}
