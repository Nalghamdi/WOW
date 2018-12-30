// For the vendors i only did the florist since the rest have the same idea and i was running out of time 🙁

var express = require('express');
var router = express.Router();

var vendor = require('../models/vendor');

var user = require('../models/user');
router.get('/', vendor.floristLikesCount, renderMainIndex);

router.get('/florist', vendor.getAllFlorist,vendor.getFloristRiyadh, vendor.getFloristDammam ,renderFloristIndex);
// router.get('/dress', vendor.getAllDress, renderDressIndex);

// router.get('/florist', vendor.getFloristRiyadh, renderFloristRIndex);

router.post('/florist', vendor.like, redirectFloristIndex);

router.get('/florist/:id', vendor.findFlorist,vendor.findFloristP ,user.find, vendor.getFloristImg, renderFShow);


router.get('/likes', vendor.allLikes, renderLikesIndex);
router.post('/likes', vendor.like, redirectLikesIndex);


function renderMainIndex(req, res){ 
    var mustacheVariables = {
        floristCount:res.locals.floristLikesCount ,
        user_id:req.session.user.id  }
res.render('./vendors/index', mustacheVariables)}


function renderFloristIndex(req, res){
    var mustacheVariables = {
        florist: res.locals.florist,
        floristRiyadh: res.locals.floristRiyadh,
        floristDammam:res.locals.floristDammam,
        likes:res.locals.like,
        user_id:req.session.user.id
    }
    res.render('./vendors/florist', mustacheVariables)
}

function renderFShow(req,res){
    var mustachVariables = {
    show:res.locals.florist,
    showP:res.locals.floristP,
    user:res.locals.user,
showimg:res.locals.floristPic,
user_id:req.session.user.id }; 

    res.render('./vendors/floristShow', mustachVariables)
}

function renderLikesIndex(req, res){
    var mustacheVariables = {
        likes: res.locals.allLikes,
        user_id:req.session.user.id 
    }
    res.render('./vendors/likes', mustacheVariables)}

    function redirectLikesIndex(req,res){
        res.redirect('/vendor/likes');
    }

function redirectFloristIndex(req,res){
    res.redirect(`/users/${req.session.user.id}/vendor/florist`);
}

module.exports = router;