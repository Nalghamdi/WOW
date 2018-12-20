var express = require('express');
var router = express.Router();

var product = require('../models/product');

router.get('/', product.getRemaining,product.remaining,product.completed, renderIndex);
router.get('/', product.find, renderEdit);

router.get('/', product.search, renderIndex);


router.get('/completed', product.getCompleted, renderCompleted);

router.get('/new', renderNew);
router.put('/', product.edit , redirectIndex)
router.put('/', product.done , redirectIndex)
router.put('/:id', product.edit , redirectIndex)


router.get('/:id/edit', product.find, renderEdit);
router.get('/:id', product.find , renderShow);
router.post('/',product.create, redirectIndex);
router.delete('/:id', product.delete , redirectIndex);
router.delete('/', product.delete1 , redirectIndex);
// router.put('/:id', product.update , redirectShow)


function renderIndex(req, res){
    var mustacheVariables = {
        product: res.locals.product,
        remaining:res.locals.productRemaining,
        completed: res.locals.productCompleted,
        search:res.locals.search
    }

    res.render('./terms/index', mustacheVariables)
}

function renderCompleted(req, res){
    var mustacheVariables = {
        product: res.locals.product,

    }

    res.render('./terms/completed', mustacheVariables)
}

function renderShow(req,res){
    var mustachVariables = res.locals.product; 
    res.render('./terms/show', mustachVariables)
}

function renderEdit(req,res){
    var mustachVariables = res.locals.product;
    res.render('./terms/edit', mustachVariables)
}



function renderNew(req, res){
    res.render('./terms/new');
}

function redirectShow(req,res){
    res.redirect(`/terms/${res.locals.product_id}`);
}

function redirectIndex(req,res){
    res.redirect('/product');
}

module.exports = router;