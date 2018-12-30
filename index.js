var express = require('express');
var app = express();
var port = 3000;

// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var modal=require('jquery-modal');
// app.use(modal);

var session = require('express-session');
app.use(session({
  secret: 'keyboard cat',
  resave:true,
  saveUninitialized:true
}));

app.use(express.static(__dirname + '/JS'));

app.use('/static', express.static(__dirname + '/public'));
// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/' , function(req,res){
  res.render('./index')
})
// use controller 
// var wowController = require('./controllers/wowController');
// app.use('/wow' ,wowController);
// var todoController = require('./controllers/todoController');
// app.use('/todo' ,todoController);

// var budgetController = require('./controllers/budgetController');
// app.use('/budget' ,budgetController);

// var vendorController = require('./controllers/vendorController');
// app.use('/vendors' ,vendorController);

var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

var usersController = require('./controllers/usersController');
var sessionsController = require('./controllers/sessionsController');

app.use('/login', sessionsController);
app.use('/users', usersController);

app.get('/', (req, res) => {
  res.redirect('/login');})
app.get('/about', (req, res) => {
res.render('./home');})
app.get('/services', (req, res) => {
  res.render('./services');})


app.listen(port, function(){
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
})