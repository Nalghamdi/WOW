var express = require('express');
var router = express.Router();

var todo = require('../models/todo');

router.get('/', todo.getRemaining,todo.remaining,todo.completed, renderIndex);
router.get('/', todo.find, renderEdit);

// router.get('/', todo.search, renderIndex);


router.get('/completed', todo.getCompleted, renderCompleted);

router.get('/new', renderNew);
router.put('/', todo.edit ,todo.done, redirectIndex)

// router.put('/', todo.done , redirectIndex)
router.put('/:id', todo.edit , redirectIndex)

router.get('/:id/edit', todo.find, renderEdit);
router.get('/:id', todo.find , renderShow);
router.post('/',todo.create, redirectIndex);
// router.delete('/:id', todo.delete , redirectIndex);
router.delete('/', todo.delete1 , redirectIndex);
// router.put('/:id', todo.update , redirectShow)


function renderIndex(req, res){
    var mustacheVariables = {
        todo: res.locals.todo,
        remaining:res.locals.todoRemaining,
        completed: res.locals.todoCompleted,
        search:res.locals.search,
        user_id:req.session.user.id
    }

    res.render('./terms/index', mustacheVariables)
}

function renderCompleted(req, res){
    var mustacheVariables = {
        todo: res.locals.todo,
        user_id:req.session.user.id

    }

    res.render('./terms/completed', mustacheVariables)
}


function renderShow(req,res){
    var mustachVariables = {
        todo:res.locals.todo,
        user_id:req.session.user.id }
    res.render('./terms/show', mustachVariables)
}

function renderEdit(req,res){
    var mustachVariables = res.locals.todo;
    res.render('./terms/edit', mustachVariables)
}



function renderNew(req, res){
    res.render('./terms/new');
}

function redirectShow(req,res){
    res.redirect(`/terms/${res.locals.todo_id}`);
}

function redirectIndex(req,res){
    res.redirect(`/users/${req.session.user.id}/todo`);
}

module.exports = router;