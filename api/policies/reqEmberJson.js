module.exports = function(req, res, next) {

	// Formats the Json in the Request Body from Ember
	if(req.body !== undefined && req.body[req.options.model] !== undefined){	
		req.body = req.body[req.options.model];
	}

	return next();
}; 