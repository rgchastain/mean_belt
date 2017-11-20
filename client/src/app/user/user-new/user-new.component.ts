import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
	user: User;

	constructor(
		private _route: Router,
  		private _userService: UserService
  	) { }

  ngOnInit() {
  	this.user = new User();

  	if (this._userService.createUser) {
  		// this._route.navigateByUrl('/dashboard')
  	}
  }

  onSubmit() {
  	this._userService.createUser(this.user,
  		(user) => {
  			this._route.navigateByUrl('/dashboard')
  		},
  		(err) => {
  			console.log(err);
  		}
  	);
  	this.user = new User();
  }

}
