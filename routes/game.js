function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","Get, Post, Put");
    res.json("User Unauthenticated");
  }
}

module.exports = function(gameModel){
  var express = require('express');
  var router = express.Router();
  router.get('/get/:ps/:pn',isLoggedIn, function(req, res, next) {
		gameModel.find(function(err,data){
      if(err){
        console.log(err);
      }
      var d = data.slice(req.params.ps*(req.params.pn-1),req.params.ps*req.params.pn);
        d.push(Math.ceil(data.length/req.params.ps));
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods","Get, Post, Put");
        res.json(d);
		});
  });

  router.get('/getSort/:ps/:pn',isLoggedIn, function(req, res, next) {
		gameModel.find(function(err,data){
      if(err){
        console.log(err);
      }
      data.sort(function(a,b){
        return a.score - b.score;
      })
      var d = data.slice(req.params.ps*(req.params.pn-1),req.params.ps*req.params.pn);
        d.push(Math.ceil(data.length/req.params.ps));
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods","Get, Post, Put");
        res.json(d);
		});
  });

  router.get('/find/:name/:ps/:pn',isLoggedIn,function(req,res,next){
    gameModel.find({'$or':[{'title':{ "$regex": req.params.name, "$options": "i" }},{'platform':{ "$regex": req.params.name, "$options": "i" }},{'genre':{ "$regex": req.params.name, "$options": "i" }}]},function(err,data){
      if(err){
        console.log(err);
      }
      var d = data.slice(req.params.ps*(req.params.pn-1),req.params.ps*req.params.pn);
      d.push(Math.ceil(data.length/req.params.ps));
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods","Get, Post, Put");
      res.json(d);
    })
  });
return router;
}
