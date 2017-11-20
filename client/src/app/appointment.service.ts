import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Appointment } from './appointment';
import { UserService } from './user.service';
import { User } from './user';

@Injectable()
export class AppointmentService {
	appointments: Appointment[] = []
	allAppointments: Appointment[]

	constructor(
		private _http: Http,
		private _userService: UserService,
	) { }

	retrieveAppointments(callback, errorback): void {
		this._http.get('/appointments').subscribe(
			(res) => {
				this.appointments = res.json();
				callback(this.appointments);
			},
			(err) => {
				errorback(err);
			}
		)
	}

	createAppointment(appointment: Appointment, callback): void {
		this._http.post('/appointments', appointment).subscribe(
			(res) => {
				const appointment = res.json();
				this.appointments.push(appointment);
				console.log(appointment)
				callback(appointment);
			},
			(err) => {

			}
		)
	}

	search(data, callback) {
    if (data.search.length > 0) {
      let ret = []
      for(let i = 0; i < this.allAppointments.length; i++) {
          if (this.allAppointments[i]){
              ret.push(this.allAppointments[i])
          }
      }
      return callback(ret);
    } else {
      return callback(this.allAppointments);
    }
  }

}
