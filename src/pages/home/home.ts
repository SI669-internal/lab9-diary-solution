import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EntryDetailPage } from '../entry-detail/entry-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private entries: any[] = [];

  constructor(public navCtrl: NavController) {
    let fakeEntries = [
      {
        title: "Latest Entry",
        text: "Today I went to my favorite class, SI 669. It was super great."
      },
      {
        title: "Earlier Entry",
        text: "I can't wait for Halloween! I'm going to eat so much candy!!!"
      },
      {
        title: "First Entry",
        text: "OMG Project 1 was the absolute suck!"
      }
    ];

    this.entries = fakeEntries;

  }

  go() {
    this.navCtrl.push(EntryDetailPage);
  }
}
