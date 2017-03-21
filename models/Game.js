var gameCollection = require('../config.json').gameCollection;
module.exports =(Mongoose)=>{
	var game = new Mongoose.Schema({
		title:String,
		platform:String,
		score:Number,
		genre:String,
		editors_choice:String
	});
	var gameModel = Mongoose.model(gameCollection,game);
	return gameModel;
}
