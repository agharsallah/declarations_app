const Names = require('../app/models/names');

/**
 * Fetch for the list oof user with certain name for the fuzy search
 */
export const getNamesDb = (req, res, next) => {
	var tosearch = new RegExp(".*"+req.params.declaration+".*","i");


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

/* given a concatenated name lastname Fetch for the user's details   */
export const getDeclarations = (req, res, next) => {
	let name,lastName;
		name=(req.params.declaration).split("**")[0]
		lastName=(req.params.declaration).split("**")[1]
	Names.find({name:name,lastName:lastName}
		  , function(err, resultedName) {
			if (err) { return next(err); }

			res.json(resultedName);
		})
}


export const postNamesDb = (req, res, next) => {
	var namesdb = new Names();
	console.log(req.body);		
	namesdb.name = req.body.name;  
	namesdb.lastName = req.body.lastName;  
	namesdb.declarationDate = req.body.declarationDate;  
	namesdb.job = req.body.job;  
	namesdb.ministry = req.body.ministry; 
	namesdb.declarationObject = req.body.declarationObject;

	namesdb.save(function(err) {
			if (err) { return next(err); }

			res.json({ message: 'Names Db created!' });
		});

};