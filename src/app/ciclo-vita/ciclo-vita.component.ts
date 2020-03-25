import { Component, OnInit, SimpleChanges, OnDestroy, OnChanges, Input, DoCheck, AfterViewInit, AfterViewChecked, ViewChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Persona } from '../model/persona.interface';
import { SecondoComponent } from '../secondo/secondo.component';

@Component({
  selector: 'app-ciclo-vita',
  templateUrl: './ciclo-vita.component.html',
  styleUrls: ['./ciclo-vita.component.scss']
})
export class CicloVitaComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input()
  primitiva: string = 'valore default';
  @Input()
  profilo: Persona;
  @Input()
  profilo1: Persona;

  inputVar: string;

  @ViewChild(SecondoComponent)
  private secondoComponentRef: SecondoComponent;

  private nomeProfiloPrecedente: string;

  constructor() {
    console.log('constructor: ' + this.primitiva);
  }

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
      if (changes['profilo1'] != null && changes['profilo1'].previousValue !== changes['profilo1'].currentValue
        && !changes['profilo1'].firstChange) {
        console.log('è stato modificato profilo1');
      }
    }
  }

  ngOnInit(): void {
    console.log('oninit: ' + this.primitiva);
    if (this.secondoComponentRef != null) {
      console.log('oninit - secondoComponentRef esiste già');
    }
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
    // if (this.nomeProfiloPrecedente !== this.profilo.nome) {
    //   console.log('è stata modifica la proprietà nome di profilo');
    //   this.nomeProfiloPrecedente = this.profilo.nome;
    // }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    if (this.secondoComponentRef != null) {
      console.log('ngAfterViewInit - secondoComponentRef esiste già');
    }
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('onDestroy: ' + this.primitiva);
  }

}
