import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenService {

  constructor() { }

  authenticate(user,pwd)
  {
    if(user==='reeti' && pwd=='123')
    {
      sessionStorage.setItem('authenticatedUser',user)
      return  true;
    }
    return false;

  }

  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user===null);
  }

  logout()
  {
    sessionStorage.removeItem('authenticatedUser');
  }
}
