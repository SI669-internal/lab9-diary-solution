import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entry } from '../../models/entry';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';


@IonicPage()
@Component({
  selector: 'page-entry-detail',
  templateUrl: 'entry-detail.html',
})
export class EntryDetailPage {

  private entryTitle: string;
  private entryText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private entryDataService: EntryDataServiceProvider) {}

  private saveEntry() {
    let newEntry = new Entry();
    newEntry.title = this.entryTitle;
    newEntry.text = this.entryText;
    this.entryDataService.addEntry(newEntry);
    this.navCtrl.pop();
  }

}
