import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { GameItem } from 'src/game-item.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameForm: FormGroup;
  gameEditForm: FormGroup;


  gameList: Observable<GameItem[]>;
  gameDetail: GameItem;

  get nameControl(): FormControl{
    return this.gameForm.get('name') as FormControl;
  }

  get authorControl(): FormControl{
    return this.gameForm.get('author') as FormControl;
  }

  constructor(private myHttpService: MyHttpService, private fb: FormBuilder) { 
    this.gameForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required]
    });
    this.gameEditForm = this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.recuperaListaGiochi();

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

  recuperaListaGiochi(){
    this.gameList = this.myHttpService.getGames();
  }

  getDettaglio(id: number){
    this.myHttpService.getGame(id).subscribe(value=>{
      this.gameDetail = value.body;
      this.gameEditForm.setValue({
        name: this.gameDetail.name,
        author: this.gameDetail.author
      });
    })
  }

  modificaGioco(){
    this.myHttpService.putGame({
      author: this.gameEditForm.get('author').value,
      name: this.gameEditForm.get('name').value,
      id: this.gameDetail.id
    }).subscribe(()=>{
      this.recuperaListaGiochi();
    })
  }

  eliminaGioco(id: number){
    this.myHttpService.deleteGame(id).subscribe(()=>{
      this.recuperaListaGiochi();
    });
  }

  aggiungiGioco(){
    this.myHttpService.postGame({
      id: undefined,
      author: this.authorControl.value,
      name: this.nameControl.value
    }).subscribe(()=>{
      this.recuperaListaGiochi();
    });
  }

}
