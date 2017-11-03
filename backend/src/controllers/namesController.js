const Names = require('../app/models/names');
var _ = require('lodash');
/**
 * Fetch for the list of user with certain name, functionality for the fuzy search
 */
export const getNamesDb = (req, res, next) => {
	var tosearch = new RegExp(".*"+req.params.declaration+".*","i");
		console.log(tosearch);
		Names.aggregate([
			
			{ $match: { 
				$or:[{name: {$regex :tosearch}},{lastName: {$regex :tosearch}}]
			  } },
			{ $group: {
			  _id: {name:"$name",lastName:"$lastName"}  // replace `name` here twice
			  
			} }, 
			{ $sort : { count : -1} },
			{ $limit : 7 }
		  ]
		  , function(err, resultedName) {
			if (err) { return next(err); }

			res.json(resultedName);
		})
}

/* given a concatenated name lastname Fetch for the user's details */
export const getDeclarations = (req, res, next) => {
	let name,lastName;
		name=(req.params.declaration).split("**")[0]
		lastName=(req.params.declaration).split("**")[1]
	console.log(name);
	Names.find({name:name,lastName:lastName}
		  , function(err, resultedName) {
			if (err) { return next(err); console.log(err);}

			res.json(resultedName);
		})
}
/* export const getAdvancedDeclarations = (req, res, next) => {
	console.log('ser',req.query.date);
	
	Names.find({$text: {$search: "mohammed"}}, {score: {$meta: "textScore"}}, 
	function(err, resultedNames) {
		if (err) { console.log(err);}
		console.log(resultedNames);
		res.send(resultedNames);
	})
		
} */
export const getAdvancedDeclarations = (req, res, next) => {
	let to_search = req.query.objet+' '+req.query.ministry+' '+req.query.date
	console.log('ser',to_search);
	
	Names.aggregate([
		{ 
			"$match": { 
				   "$text": { 
						 "$search": to_search 
					} 
			 } 
		},
		{ 
			 "$project": { 
				   "_id": {name:"$name",lastName:"$lastName"}, 
				   "score": { 
						 "$meta": "textScore" 
					}
					
			  } 
		 },
		 { 
			  "$match": { 
					"score": { "$gt": 0.8 } 
			   } 
		 },
		 {$sort:{score:{$meta:"textScore"}}}
	]
	,function(err, resultedNames) {
		if (err) { console.log(err);}
		//console.log(resultedNames);
		res.send(resultedNames);
	})
	
		
}

/* Get data for the statistics about number of declaration per year */
export const getDeclarationsNumber = (req, res, next) => {
	let year,arr=[],valueArr=[]
	Names.find({}
		  , function(err, resultedName) {
			if (err) { return next(err); }
			resultedName.map((object)=>{
				year=(object.declarationDate).split("-")[2];
/* 				if (year.charAt(0)=="0") {
					year="20"+year;
				}else{year="19"+year;} */

				//if year don't exist in array add it to array and initialize the valueArr to 1 
				let index =_.findIndex(arr, function(o) { return o.year == year; })
				if (year!=undefined) {
					if (index==-1 ) {
						arr.push({year,value:1});
					}else{
						(arr[index]).value+=1;
					}
				}
				
			})
			console.log(arr);
			res.json(_.sortBy(arr, ['year', 'value']));
		})
}

export const postNamesDb = (req, res, next) => {
	var namesdb = new Names();
	namesdb.name = req.body.name;  
	namesdb.lastName = req.body.lastName;  
	namesdb.declarationDate = req.body.declarationDate;  
	namesdb.job = req.body.job;  
	namesdb.ministry = req.body.ministry; 
	namesdb.declarationObject = req.body.declarationObject;
	console.log(namesdb);		
	
	namesdb.save(function(err) {
			if (err) { return next(err); }

			res.json({ message: 'Names Db created!' });
		});

};