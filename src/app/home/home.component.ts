import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImage: string;
  titleImg: string;

  constructor() {
    this.backgroundImage = 'assets/images/bg.jpg';
    this.titleImg = 'assets/images/pv.png';
  }

  ngOnInit() {
  }

}
