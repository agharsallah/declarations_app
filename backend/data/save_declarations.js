var axios = require('axios');
var fs = require('fs');
const path = require('path')
var config = require('./config.js');
var request = require('request');
//var data = require('./data/declaration.js');
var data = require('./data/base_justice.js');
data= data.arrayDb;
console.log(data.length);
var leng = data.length
var notSaved=[];
//console.log(leng );
var max={maxSockets: Infinity}

for (let i = 0; i < 3000; i++) {
	var element = data[i];
	var qString=config.apiUrl+"/api/savedb/";	
	var options = {
		url: qString,
		pool: max,
		headers: {
			'name': 'barlamen',
			'password': 'b@rlamen1',
			'Content-type': 'application/x-www-form-urlencoded'
		},
		 form: {
			name: element.name,
			lastName: element.lastName,
			declarationDate: element.declarationDate,
			job: element.job,
			ministry: element.ministry,
			declarationObject: element.declarationObject
		} 
	}

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log('Posted to DB');
		}else{
			if (error.code=="ETIMEDOUT") {
				console.log(options.form.name,options.form.lastName,options.form.job);
				//i--;
				//request.post(options, callback);
			}
		}
	}

	request.post(options, callback);
}
console.log(notSaved);

              