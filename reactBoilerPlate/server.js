var path = require('path');
var webpack = require('webpack');
var express = require('express');
var cros = cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var linkedIn = require('./webserver/routes/linkedIn');
var app = express();
var compiler = webpack(config);
var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, './webclient/')));


//Mongoose
var db = require('./config.json').dbURI;
mongoose.connect(db);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log("connnected with mongo");
    require('./pullalldata')();
});



//Ruotes

app.use('/',linkedIn);


app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
}));

app.use(webpackHotMiddleware(compiler));



//Listening to port 8081
app.listen(8080, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }

    console.log("Server started at 8081");
});
