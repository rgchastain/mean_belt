var	users			= require('../controllers/users')
	path			= require('path')
	sessions 		= require('../controllers/sessions')
	appointments 	= require('../controllers/appointments')

module.exports = (app) => {
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.get('/appointments', appointments.index);
	app.post('/appointments', appointments.create);


	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}