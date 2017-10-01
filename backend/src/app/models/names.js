var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DeclarationNames   = new Schema({
	name: { type: String },
	lastName: { type: String },
	declarationDate: { type: String},
	job: { type: String },
	ministry: { type: String },
	declarationObject: { type: String },
});

module.exports = mongoose.model('Names', DeclarationNames);