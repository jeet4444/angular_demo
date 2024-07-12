import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: String, password: String) {
    if (username == "jeet" && password == "123") {
      return true;
    } 
    return false;
  }
}
