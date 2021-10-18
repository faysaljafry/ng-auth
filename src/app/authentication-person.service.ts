import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationPersonService {
  constructor() {}
  gettoken() {
    return !!localStorage.getItem('session');
  }
}
