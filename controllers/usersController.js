var express = require('express');
var router = express.Router();

var user = require('../models/user');
var auth = require('../middleware/auth');

var budget = require('../models/budget');
var todo = require('../models/todo');


router.get('/new', renderNew);
router.get('/:id', auth.onlyUsers, user.find, budget.addDummyData,todo.addDummyData,user.wedDate,budget.sum,budget.getTotal,todo.remaining,todo.completed,renderShow);

var vendorController = require('../controllers/vendorController');
router.use('/:id/vendor' ,auth.onlyUsers, user.find,vendorController);


var budgetController = require('../controllers/budgetController');
router.use('/:id/budget' , auth.onlyUsers, user.find,budgetController);

var todoController = require('../controllers/todoController');
router.use('/:id/todo' , auth.onlyUsers, user.find,todoController);

router.post('/', user.create,redirectShow);

function renderNew(req, res){
  res.render('./users/new');
}
function renderShow(req, res) {
  console.log(req.session.user)
  var mustacheVariables = {
    user: res.locals.user,
    user_id:req.session.user.id,
    remaining:res.locals.todoRemaining,
    completed: res.locals.todoCompleted
  }
  res.render('./users/show', mustacheVariables)
}

function redirectShow(req, res) {
  res.redirect(`/users/${res.locals.userId}`);
}

module.exports = router;