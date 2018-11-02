import { Injectable } from '@angular/core';
import { Entry } from '../../models/entry';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class EntryDataServiceProvider {

  private entries: Entry[] = [];
  private serviceObserver: Observer<Entry[]>;
  private clientObservable: Observable<Entry[]>;

  constructor(  ) { 
    let foo;
    this.loadFakeEntries();
    this.clientObservable = Observable.create(observerThatWasCreated => {
      this.serviceObserver = observerThatWasCreated;
    });
  }

  public getObservable(): Observable<Entry[]> {
    return this.clientObservable;
  }

  private notifySubscribers(): void {
    this.serviceObserver.next(undefined);
  }

  public getEntries():Entry[] {
    let entriesClone = JSON.parse(JSON.stringify(this.entries));
    return entriesClone;
  }

  public addEntry(entry:Entry) {
    this.entries.push(entry);
    this.notifySubscribers();
//    console.log("Added an entry, the list is now: ", this.entries);
  }

  private loadFakeEntries() {
    this.entries = [
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
  }
}
