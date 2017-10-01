var axios = require('axios');
var fs = require('fs');
const path = require('path')
var config = require('./config.js');
var request = require('request');
var data = require('./data/declaration.js');
data= data.arrayDb
data.map(function(object, i){	
	var qString=config.apiUrl+"/api/savedb/";	
	var options = {
		url: qString,
		headers: {
			'name': 'barlamen',
			'password': 'b@rlamen1',
			'Content-type': 'application/x-www-form-urlencoded'
		},
		 form: {
			name: object.PRENOM,
			lastName: object.NOM,
			declarationDate: object.DATEDECLARATION,
			job: object.FONCTION,
			ministry: object.MINISTERE,
			declarationObject: object.OBJET
		} 
	}

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log('Posted to DB');
		}else{
			console.log(error);
		}
	}

	request.post(options, callback);
})


              