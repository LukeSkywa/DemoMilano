import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  
  @ViewChild('inputProva')
  inputRef: ElementRef;


  @Output('eventoClick')
  clickEvent: EventEmitter<string> = new EventEmitter();

  mostraRosso: boolean = false;

  titolo = 'iniziale';

  get oggettoClassi() {
    return {
      prova: this.mostraRosso,
      altro: !this.mostraRosso
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  inputEvent(target) {
    this.titolo = target.value;
  }

  gestioneClick(event) {
    console.log('valore viewchild: '+this.inputRef.nativeElement.value);
    this.clickEvent.emit(this.titolo);
    this.titolo = 'dopo click';
    this.mostraRosso = !this.mostraRosso;
  }

}
