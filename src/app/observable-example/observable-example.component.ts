import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, from, interval, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit, OnDestroy {

  private intervalSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const obs1$ = of(1, 2, 3);
    obs1$.subscribe(value => {
      console.log("Valore1 of: " + value);
    });
    obs1$.subscribe(value => {
      console.log("Valore2 of: " + value);
    });
    from([1, 2, 3]).subscribe(value => {
      console.log("Valore from: " + value);
    });

    this.intervalSubscription = interval(1000).subscribe({
      next: n => {
        console.log(`It's been ${n} seconds since subscribing!`)
      },
      error: null,
      complete: ()=> {console.log('interval complete')}
    });
    
    timer(5000).subscribe({
      next: n => {
        console.log(`Timer`)
      },
      complete: ()=> {console.log('timer complete')}
    });

  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
