import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Header, HeaderFooterModel } from '../../model/header-footer.interface';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
   data: HeaderFooterModel = require('../../../assets/locales/header-footer.json')
   header: Header[] = this.data.body.header
  constructor(private router:Router,private authService:UserService,@Inject(PLATFORM_ID) private platformId: Object){}
  user:boolean = false
  object = new BehaviorSubject(this.user)
  
  ngOnInit(): void {
      
    if(isPlatformBrowser(this.platformId))
    {

      if(localStorage.getItem("user"))
      {
        
        
        this.object.next(this.user)
        this.object.subscribe((res:boolean)=>{
             this.user = true
            
        })
      }
      else
      {
        this.object.next(this.user)
        this.object.subscribe((res:boolean)=>{
          this.user = false
        })
      }
      
    }
    
      
  }

  handleLogout()
  {
    this.authService.logOut()
  }

}
