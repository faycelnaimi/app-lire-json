import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';


const source = timer(1000, 2000);
const subscribe = source.subscribe(val => console.log(val));

setTimeout(() => { subscribe.unsubscribe(); }, 10000);

const myObservable = of('apple', 'orange', 'grappe');

const myObserver = {
  next: (x: string) => console.log('Observer got a next value: ' + x),
  error: (err: string) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};


function sequenceSubscriber(observer) {
  observer.next('Apple');
  observer.next('Orange');
  observer.next('Grappe');
  observer.complete();

  return {unsubscribe() {}};
}

const sequence = new Observable(sequenceSubscriber);

sequence.subscribe({
  next(msg) { console.log(msg); },
  complete() { console.log('Finished sequence'); }
});


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {



  constructor() {
    myObservable.subscribe(myObserver);
   }

  ngOnInit() {
  }










}
