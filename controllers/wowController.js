// var express = require('express');
// var router = express.Router();

// var term = require('../models/term');

// router.get('/', term.getAll, renderIndex);
// router.get('/new', renderNew);

// router.get('/:id/edit', term.find, renderEdit);
// router.get('/:id', term.find , renderShow);
// router.post('/',term.create, redirectShow);
// router.delete('/:id', term.delete , redirectIndex);
// router.put('/:id', term.update , redirectShow)


// function renderIndex(req, res){
//     var mustacheVariables = {
//         term: res.locals.term
//     }
//     res.render('./terms/index', mustacheVariables)
// }

// // function renderIndex(res,req){
// //     var mustachVariables = {
// //        terms: res.locals.term
// // }
// // res.render('./terms/index', mustachVariables);
// // }



// function renderShow(req,res){
//     var mustachVariables = res.locals.term; 
//     res.render('./terms/show', mustachVariables)
// }

// function renderEdit(req,res){
//     var mustachVariables = res.locals.term;
//     res.render('./terms/edit', mustachVariables)
// }

// // function renderNew(req,res){
// //     res.render('./terms/new')
// // }

// function renderNew(req, res){
//     res.render('./terms/new');
// }

// function redirectShow(req,res){
//     res.redirect(`/terms/${res.locals.term_id}`);
// }

// function redirectIndex(req,res){
//     res.redirect('/todo');
// }

// module.exports = router;