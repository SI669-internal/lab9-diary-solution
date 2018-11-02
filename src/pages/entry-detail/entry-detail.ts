import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Entry } from '../../models/entry';
import { EntryDataServiceProvider } from '../../providers/entry-data-service/entry-data-service';
import { EntryDetailPageModule } from './entry-detail.module';


@IonicPage()
@Component({
  selector: 'page-entry-detail',
  templateUrl: 'entry-detail.html',
})
export class EntryDetailPage {

  private entry: Entry;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private entryDataService: EntryDataServiceProvider) {
      let entryID = this.navParams.get("entryID");
      if (entryID === undefined) {
        this.entry = new Entry();
        this.entry.title = "";
        this.entry.text = "";
        this.entry.id = -1; // placeholder for 'temporary' entry
      } else {
        this.entry = this.entryDataService.getEntryByID(entryID);
      }
      console.log("entry is ", this.entry);
    }


  private saveEntry() {
    // let newEntry = new Entry();
    // newEntry.title = this.entryTitle;
    // newEntry.text = this.entryText;
    this.entryDataService.addEntry(this.entry);
    this.navCtrl.pop();
  }

}
