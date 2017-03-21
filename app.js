var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var config = require('./config.json');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Mongoose = require('mongoose').connect(config.dbURI);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var routes = require('./routes/index');
var connectflash = require('connect-flash');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({ secret: require('./config.json').sessionSecret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());
app.use(express.static(path.join(__dirname, 'public')));

//database connectivity
var gameModel = require('./models/Game')(Mongoose);
var userModel = require("./models/User")(Mongoose);
Mongoose.connection.on('error',console.error.bind(console,'Connection error.......!!!!!'));
Mongoose.connection.once('open',function(){
 console.log("Connection to MongoDB successfully");
 require('./putalldata')(gameModel);
});

var game = require('./routes/game')(gameModel);
var user = require('./routes/users')(userModel);
//app.use('/', routes);
app.use('/user', user);
app.use('/game', game);

app.get('/logout',function(req,res,next){
  console.log("Session Deleted");
  req.logout();
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","Get, Post, Put");
  res.send("logged out");
});

app.post('/login',
  passport.authenticate('local', { failureFlash: 'Error',successFlash:'success' }),
  function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","Get, Post, Put");
    res.json({responseText:'Authorised'});
    console.log("in Login");
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    var temp = userModel.findOne({ 'username': username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (user.password!==password) { return done(null, false);}
     return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  userModel.findById(id, function (err, user) {
    done(err, user);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","Get, Post, Put");
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
