var express = require('express');
var app = express.Router();
var GameModel = require('../Modals/games.js');
//var scope = ['r_basicprofile', 'r_emailaddress'];


app.get('/alldata', function(req, res) {
    GameModel.find().limit().exec(function(err,data){
        res.json(data);
    })
});


module.exports = app;
