import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, interval, timer, Subscription, combineLatest } from 'rxjs';
import { filter, first, distinct, takeUntil, takeWhile, take, map, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    //Esempio Filter
    of(1, 2, 3).pipe(
      filter(value => {
        return value % 2 !== 0;
      })
    ).subscribe(value => {
      console.log('valore filtrato: ' + value);
    });

    // Esemprio First
    of(1, 2, 3).pipe(
      first()
    ).subscribe(value => {
      console.log('valore first: ' + value);
    });
    of(1, 2, 3, 4, 6).pipe(
      first(value => {
        return value % 2 === 0;
      })
    ).subscribe(value => {
      console.log('valore first con filtro: ' + value);
    });
    // questa sotto è uguale a quella sopra
    of(1, 2, 3, 4, 6).pipe(
      filter(value => {
        return value % 2 === 0;
      }),
      first()
    ).subscribe(value => {
      console.log('valore filter+first: ' + value);
    });

    // Esempio Distinct
    of(1, 2, 3, 1, 4, 3, 5, 2, 7, 3, 4, 5).pipe(
      distinct()
    ).subscribe(value => {
      console.log('Valore Distinct: ' + value)
    });

    //Esempio TakeUntil
    const source$ = interval(1000);
    const timer$ = timer(5000);
    const example$ = source$.pipe(takeUntil(timer$));
    example$.subscribe(val => console.log('Valore intervallo: ' + val));

    // Esempio TakeWhile
    of(1, 2, 3, 4, 5, 1, 4, 2, 3).pipe(
      takeWhile(val => val <= 4)
    ).subscribe(val => console.log('Valore TakeWhile: ' + val));

    // Esempio Take
    of(1, 2, 6, 3, 4, 5, 1, 4, 2, 3).pipe(
      take(3)
    ).subscribe(val => console.log('Valore Take: ' + val));

    // Esempio Map
    of(1, 2, 5, 6).pipe(
      map(value => {
        return value * value;
      })
    ).subscribe(value => {
      console.log('Valore Map: ' + value);
    });

    // Esempio Reduce
    of(1, 2, 3, 4).pipe(
      reduce((acc, value) => {
        return acc + value;
      })
    ).subscribe(value => {
      console.log('Valore Reduce: ' + value);
    });

    // Esempio CombineLatest
    // timer(1000, 4000).subscribe(value=> console.log('timer1: '+value))
    // timer(2000, 3000).subscribe(value=> console.log('timer2: '+value))
    combineLatest(timer(1000, 4000), timer(2000, 3000)).subscribe(([value1, value2]) => {
      return console.log('Valore combineLatest -value1 ' + value1 + ', value2 ' + value2);
    })


  }

  ngOnDestroy(): void {
  }

}
