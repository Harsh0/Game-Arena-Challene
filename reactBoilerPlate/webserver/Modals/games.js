var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gameSchema = new Schema({
      title:String,
      platform:String,
      score:Number,
      genre:String,
      editors_choice:String
});

module.exports = mongoose.model('gameDetails',gameSchema);