import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { AppointmentService } from '../../appointment.service'
import { Appointment } from '../../appointment';
import { User } from '../../user';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
	currentUser = this._userService.currentUser
	user: User;
	appointments: Appointment[] = [];

	constructor(
		private _appointmentService: AppointmentService,
		private _userService: UserService
	) {}

	ngOnInit() {
		this._appointmentService.retrieveAppointments((appointments) => {
			this.appointments = appointments
		}, console.log);
	}

	// search(data) {
 //    	let content = data.form.value
 //    	this._appointmentService.search(content, res => {
 //      		this.appointments = res;
      
 //    	})
 //  	}

  	// cancel(id, index) {
  		
  	// }

}
