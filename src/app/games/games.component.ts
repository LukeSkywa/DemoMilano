import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { GameItem } from 'src/game-item.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameList: GameItem[] = [];
  constructor(private myHttpService: MyHttpService) { }

  ngOnInit(): void {
    this.myHttpService.getGames().subscribe(value => {
      console.log(JSON.stringify(value));
      this.gameList = value.body;
    }, err => {
      console.log('Servizio andato in errore');
    });

    // possibile gestione di errore della chiamata
    this.myHttpService.getCallInError().subscribe(value => {
    }, (error: HttpErrorResponse) => {
      console.log('Servizio andato in errore');
    });

    // possibile gestione di errore della chiamata
    this.myHttpService.getCallInError().pipe(
      catchError(error => {
        return ['ho fatto il catch dell\'errore']
      })
    ).subscribe(value => {
      console.log(value);
    }, (error: HttpErrorResponse) => {
      console.log('Servizio andato in errore');
    });

  }

}
