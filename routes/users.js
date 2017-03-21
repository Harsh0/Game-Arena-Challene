module.exports = function(userModel){
  var express = require('express');
  var router = express.Router();
  router.post("/signup",function(req, res, next) {
    var user = new userModel(req.body);
    user.save(function(err){
      if(err)
      console.log(err);
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods","Get, Post, Put");
      res.send('Sign up success');
    })
  });
  return router;
}
