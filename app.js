
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lingo');

//controllers
var pageController = require('./controllers/pageController.js');
var quizController = require('./controllers/quizController.js');


//define middleware
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', pageController.index);
app.get('/quiz', pageController.quiz);
app.get('/translate', pageController.translate);
app.get('/progress', pageController.progress);

//posts
app.post('/translate', quizController.translateWord);
app.post('/quiz/start', quizController.startQuiz);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
