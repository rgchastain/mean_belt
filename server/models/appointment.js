var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
		date: {	
			type: String,
			required: [true, 'Date is required'],
		},
		time: {
			type: String,
			required: [true, 'Time is required']
		},
		complaint: {
			type: String,
			required: [true, 'Complaint is required'],
			minlength: [10, 'minimum length is 10 characters']
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}
	}, {timestamps: true});

var Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;