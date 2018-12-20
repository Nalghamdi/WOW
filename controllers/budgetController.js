var express = require('express');
var router = express.Router();

var budget = require('../models/budget');

router.get('/', budget.getTotal, budget.getVenue, budget.getDress,budget.sum,budget.sumVenue,budget.sumDresses,budget.getFlorist,budget.getCatering,budget.getDecoration,budget.getPhotography,budget.getBand,budget.getCards,budget.getCake, budget.getArtist,budget.getJewelry,budget.getOthers,
budget.sumFlorist,budget.sumDecoration , budget.sumCatering,budget.sumPhotography,budget.sumBand , budget.sumCards ,budget.sumCake,budget.sumArtist,budget.sumJewelry,budget.sumOthers, renderIndex);

router.get('/new', renderNew);
router.put('/', budget.editBudget ,budget.edit, redirectIndex)

router.put('/:id', budget.edit , redirectIndex)

router.post('/',budget.add,budget.create, redirectIndex);

// budget.createDummy,
router.delete('/', budget.delete1 , redirectIndex);


function renderIndex(req, res){
    var mustacheVariables = {
        budget: res.locals.budget,
        venue:res.locals.venue,
        dress: res.locals.dress,
        total:res.locals.sum,
        sumVenue:res.locals.sumVenue,
        sumDresses:res.locals.sumDresses,
        user_id:req.session.user.id,
        budgetAmount:res.locals.budgetAmount 
    }

    res.render('./budget/index', mustacheVariables)
}

function renderCompleted(req, res){
    var mustacheVariables = {
        budget: res.locals.budget,

    }

    res.render('./terms/completed', mustacheVariables)
}

function renderShow(req,res){
    var mustachVariables = res.locals.budget; 
    res.render('./terms/show', mustachVariables)
}

function renderEdit(req,res){
    var mustachVariables = res.locals.budget;
    res.render('./terms/edit', mustachVariables)
}



function renderNew(req, res){
    res.render('./terms/new');
}

function redirectShow(req,res){
    res.redirect(`/terms/${res.locals.budget_id}`);
}

function redirectIndex(req,res){
    res.redirect(`/users/${req.session.user.id}/budget`);
}

module.exports = router;