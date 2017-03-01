
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Articles = new Schema({

  cagetory:{

    type: String
  
  },

  title: {

    type: String

  },

  note: {

    type: String,
    ref: "Note"

  }


});

var Articles = mongoose.model("Articles" , Articles)

module.exports = Articles;

/*// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
*/