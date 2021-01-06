import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  username:String ='';

  constructor(private _userService: UserService, private _router:Router) { 
    this._userService.user()
    .subscribe(
      data=> {this.addData(data)},
      error=> { this._router.navigate(['/login'])}
    )
  }

  ngOnInit(): void {
  }

  addData(data){
    this.username = data.username;
  }

  logout(){
    this._userService.logout()
    .subscribe(
      data=>{
        console.log(data), this._router.navigate(['/login'])
      },
      error=>{
        console.error(error);
      }
    )
  }

}
