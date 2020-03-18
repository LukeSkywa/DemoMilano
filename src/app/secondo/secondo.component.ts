import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ComunicazioneService } from '../comunicazione.service';

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
  

  constructor(private comunicazioneService: ComunicazioneService) { 
  }

  ngOnInit(): void {
  }

  inputEvent(target) {
    this.titolo = target.value;
  }

  gestioneClick(event) {
    this.comunicazioneService.setNuovoValoreSubject(this.titolo);
    console.log('valore viewchild: '+this.inputRef.nativeElement.value);
    this.clickEvent.emit(this.titolo);
    this.titolo = 'dopo click';
    this.mostraRosso = !this.mostraRosso;
  }

}
