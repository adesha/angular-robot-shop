import { Component } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  user:IUser | null=null
  showSignOut:boolean=false
  constructor(private userSvc:UserService, private router:Router){

  }

  ngOnInit(){
    this.userSvc.getUser().subscribe({
      next:(user)=>{this.user=user}
    })
  }

  toggleSignOut(){
    this.showSignOut=!this.showSignOut
  }

  signOut(){
    this.userSvc.signOut();
    this.showSignOut=false
    this.router.navigate(['/sign-in'])
  }
}
