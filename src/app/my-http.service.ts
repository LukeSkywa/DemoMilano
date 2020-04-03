import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from 'src/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<HttpResponse<GameItem[]>>{
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games', 
    { observe: 'response', headers:  httpHeaders});
  }

  getGame(id: number): Observable<HttpResponse<GameItem>>{
    return this.httpClient.get<GameItem>('http://localhost:3000/games/'+id, 
    { observe: 'response'});
  }

  putGame(game: GameItem){
    return this.httpClient.put('http://localhost:3000/games/'+game.id, game,
    { observe: 'response'});
  }

  postGame(game: GameItem){
    return this.httpClient.post('http://localhost:3000/games/', game,
    { observe: 'response'});
  }

  deleteGame(id: number){
    return this.httpClient.delete<GameItem>('http://localhost:3000/games/'+id, 
    { observe: 'response'});
  }

  getCallInError(){
    return this.httpClient.get('http://localhost:3000/gams');
  }
}
