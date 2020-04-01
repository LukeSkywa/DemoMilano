import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameItem } from 'src/game-item.interface';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) { }

  getGames(): Observable<GameItem[]>{
    return this.httpClient.get<GameItem[]>('http://localhost:3000/games');
  }
}
