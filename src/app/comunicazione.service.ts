import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicazioneService {
  
  private mySubject: Subject<string> = new Subject<string>();
  mySubject$: Observable<string> = this.mySubject.asObservable();

  setNuovoValoreSubject(value: string){
    this.mySubject.next(value);
  }

  constructor() { }
}
