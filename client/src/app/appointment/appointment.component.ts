import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { User } from '../user'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private _userService: UserService) { }
  user: User; 

  ngOnInit() {
  	this.user = new User();

  	this.user = this._userService.currentUser
  }

}
