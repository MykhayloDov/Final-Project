import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public header = 'UserList example';
  public arr: string[] = [];
  visibility = true;

  constructor(private authService: AuthService, private router: Router) {
  }

  async toogle() {
    const res = await this.httpGet('https://jsonplaceholder.typicode.com/users');
    this.arr = await JSON.parse(res);
    this.visibility = !this.visibility;
  }

  httpGet(url: string) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  // ngOnDestroy() {
  //   this.logout();
  // }
}
