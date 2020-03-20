import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComunicazioneService } from './comunicazione.service';

@Injectable({
  providedIn: 'root'
})
export class MyRouteGuardService implements CanActivate {

  constructor(private comunicazioneService:ComunicazioneService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return sessionStorage.getItem('user')!= null;
  }
}
