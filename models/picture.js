// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var pictureSchema = new mongoose.Schema({
	name: String,
	location: String
});

// Return model
module.exports = restful.model('Pictures', pictureSchema);
