import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private _userService: UserService,
				private _route: Router,
				private _location: Location
		) { }

	ngOnInit() {
		this._userService.setCurrentUser(
			(user) => {
				if (!user) {
					this._route.navigateByUrl('/')
					return;
				}
				this._location.back();
			},
			console.log
		);
	}
}
