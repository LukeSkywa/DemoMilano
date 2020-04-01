import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obs1$ = of(1,2,3);
    obs1$.subscribe(value=>{
      console.log("Valore1 of: "+value);
    });
    obs1$.subscribe(value=>{
      console.log("Valore2 of: "+value);
    });
    from([1,2,3]).subscribe(value=>{
      console.log("Valore from: "+value);
    });
  }

}
