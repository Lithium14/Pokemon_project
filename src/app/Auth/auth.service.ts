import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }

  CanActivate() {
    console.info('Le guard a bien été appelé!');
    return true;
  }
}
