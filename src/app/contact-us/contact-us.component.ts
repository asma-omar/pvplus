import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsImg: string;

  constructor() {
    this.contactUsImg = 'assets/images/contact-us.jpg';
  }

  ngOnInit() {
  }

}
