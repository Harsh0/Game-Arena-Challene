var userCollection = require('../config.json').userCollection;
module.exports =(Mongoose)=>{
	var user = new Mongoose.Schema({
		username:String,
    password:String
	});
	var userModel = Mongoose.model(userCollection,user);
	return userModel;
}
