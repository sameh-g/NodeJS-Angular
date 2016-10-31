module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
app.get('/getValue', function(req, res) {

		res.sendfile('./public/login.html');
});
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};