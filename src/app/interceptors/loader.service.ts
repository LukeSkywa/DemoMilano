import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject: Subject<boolean> = new Subject<boolean>();
  loaderSubject$: Observable<boolean> = this.loaderSubject.asObservable();

  setLoader(value){
    this.loaderSubject.next(value);
  }
  constructor() { }
}
