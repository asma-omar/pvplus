import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PV PLUS';
  titleImg: string;

  constructor() {
    this.titleImg = 'assets/images/pv.png';

  }
}
