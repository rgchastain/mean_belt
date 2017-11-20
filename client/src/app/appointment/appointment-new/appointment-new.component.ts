import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
import { Appointment } from '../../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-new',
  templateUrl: './appointment-new.component.html',
  styleUrls: ['./appointment-new.component.css']
})
export class AppointmentNewComponent implements OnInit {
	appointment: Appointment;

	constructor(
		private _appointmentService: AppointmentService,
		private _router: Router
	) { }

	ngOnInit() {
		console.log(this.appointment)
		this.appointment = new Appointment();
	}

	onSubmit(){
		this._appointmentService.createAppointment(this.appointment, (appointment) => {
			console.log(appointment)
		})

		this.appointment = new Appointment();
		console.log(this.appointment)
		this._router.navigateByUrl('/dashboard');
	}

}
