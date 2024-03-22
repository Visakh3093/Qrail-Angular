import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router,@Inject(PLATFORM_ID) private platformId: Object) { }
   

  logIn()
  {
   this.router.navigate(["/"])
   localStorage.setItem("user","loggedin")
   console.log("login");
   
   
  }

  logOut()
  {
  this.router.navigate(['/login'])
  localStorage.clear()
  }


}
