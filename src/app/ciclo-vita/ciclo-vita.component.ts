import { Component, OnInit, SimpleChanges, OnDestroy, OnChanges, Input } from '@angular/core';
import { Persona } from '../model/persona.interface';

@Component({
  selector: 'app-ciclo-vita',
  templateUrl: './ciclo-vita.component.html',
  styleUrls: ['./ciclo-vita.component.scss']
})
export class CicloVitaComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  primitiva: string;
  @Input()
  profilo: Persona;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('changes: ' + JSON.stringify(changes));

      if (changes['primitiva'] != null && changes['primitiva'].previousValue !== changes['primitiva'].currentValue
        && !changes['primitiva'].firstChange) {
        console.log('è stato modificato primitiva');
      }
      if (changes['profilo'] != null && changes['profilo'].previousValue !== changes['profilo'].currentValue
        && !changes['profilo'].firstChange) {
        console.log('è stato modificato profilo');
      }
    }
  }

  ngOnInit(): void {
    console.log('oninit: ' + this.primitiva);
  }

  ngOnDestroy(): void {
    console.log('onDestroy: ' + this.primitiva);
  }
  constructor() { 
    console.log('constructor: ' + this.primitiva);
  }

}
