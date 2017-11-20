var mongoose 	= require('mongoose')
	Appointment		= require('../models/appointment')
	User		= require('../models/user')

module.exports = {
	index: (req, res) => {
		Appointment.find({}, (err, appointments) => {
			if (err) {
				return res.json(err.errors);
			}
			return res.json(appointments);
		})
	},

	create: (req, res) => {
		User.findOne({_id: session.user_id}, (err, user) => {
			let appointment = new Appointment(req.body);
			appointment.user = user._id;
			appointment.save((err) => {
				if (err) {
					return res.json(err.errors);
				}
				user.appointments.push(appointment._id)
				user.save((err) => {
					if (err) {
						return res.json(err.errors);
					}
				return res.json(appointment);
				})

			});
		})

		// let appointment = new Appointment(req.body);

		// appointment.save((err) => {
		// 	if (err) {
		// 		return res.json(err.errors);
		// 	}
		// 	return res.json(appointment);
		// });
	},



}