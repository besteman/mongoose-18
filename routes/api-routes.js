const request = require('request');
const cheerio = require('cheerio');
var mongoose = require("mongoose");



var Articles = require('./../models/news.js');

module.exports = function(app){

	app.post("/api/noting" , function(req , res){

		let user = req.body.notes;

		console.log(user);

		let id = req.body.target;

		console.log(id)

		Articles.findByIdAndUpdate(id, { $set: { note: user }}, { new: true }, function (err, articles) {
		  
		  res.send(articles)
		  
		});

	});

/*	var query = { name: 'borne' };
	Model.update(query, { name: 'jason borne' }, options, callback)

*/

	app.post("/api/selection" , function(req,res){

		let user = req.body.pick;

		cnn(user).then(function(data){

			res.send(data);

		}).catch(function(err){

			reject(err);

		});
		
	});

	app.get("/api/viewing/" , function(req,res){;



		Articles.find({ }, function (err, data) {
		  if (err) return handleError(err);
		  res.send(data) // Space Ghost is a talk show host.
		})

	})

  // find({
  //   occupation: /host/,
  //   'name.last': 'Ghost',
  //   age: { $gt: 17, $lt: 66 },
  //   likes: { $in: ['vaporizing', 'talking'] }
  // }).
  // limit(10).
  // sort({ occupation: -1 }).
  // select({ name: 1, occupation: 1 }).
  // exec(callback);

function cnn(user){

	let url = "http://www.cnn.com/" + user;

	var	results = {};

	return new Promise(function(resolve , reject){

		request(url , function(error , response , html){

			let $ = cheerio.load(html);

			$(".cd__headline-text").each(function(key , value){

				results = {};

				results.cagetory = user;
				results.title = $(this).text();
				results.note = "No Notes";

				var entry = new Articles(results)


				entry.save(function(err,doc){

					if(err){
						console.log(err);
					} else {
						
					}

				})
				
			});

			resolve(results);
		});

	}); // End of Promise 

} // End of Function CNN

} // End of Exports Function