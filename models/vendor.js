var db = require('../db/config');
var vendor = {};

//7
// SELECT vendor.* , product.img FROM vendor , product WHERE category='venue' OR vendor.id=vendor_id ;

vendor.getAllFlorist = function (req,res,next){
    db.manyOrNone("SELECT * FROM vendor WHERE category='florist';")
    .then(function(result){
        res.locals.florist=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

vendor.getFloristImg = function (req,res,next){
    db.manyOrNone(" SELECT vendor.* , product.img FROM vendor , product WHERE category='florist' OR vendor.id=vendor_id ;")
    .then(function(result){
        res.locals.floristPic=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}


vendor.floristLikesCount = function(req,res,next){

    db.one("select count(likes.*) as count from likes, vendor  where vendor.category='florist' and likes.vendor_id=vendor.id and likes.user_id=$1;", [req.session.user.id])
    .then(function(result){
        res.locals.floristLikesCount=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
} 


vendor.getFloristRiyadh = function (req,res,next){
    db.manyOrNone("SELECT * FROM vendor WHERE category='florist' AND location='riyadh';")
    .then(function(result){
        res.locals.floristRiyadh=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

vendor.getFloristDammam = function (req,res,next){
    db.manyOrNone("SELECT * FROM vendor WHERE category='florist' AND location='dammam';")
    .then(function(result){
        res.locals.floristDammam=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

vendor.findFlorist = function(req,res,next){
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM vendor WHERE category='florist' AND id=$1 ;" , [id])
    .then(function(result){
        res.locals.florist=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

vendor.findFloristP = function(req,res,next){
    var id = req.params.id;
    db.manyOrNone("SELECT product.img FROM vendor, product WHERE product.vendor_id=$1 AND product.vendor_id=vendor.id;" , [id])
    .then(function(result){
        res.locals.floristP=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}



vendor.getAllDress = function (req,res,next){
    db.manyOrNone("SELECT * FROM vendor WHERE category='dress';")
    .then(function(result){
        res.locals.dress=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

vendor.getDress = function (req,res,next){
    db.manyOrNone("SELECT * FROM vendor WHERE category='dress';")
    .then(function(result){
        res.locals.dress=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
vendor.dressLikesCount = function(req,res,next){

    db.one("select count(likes.*) as dressCount from likes, vendor  where vendor.category='dress' and likes.vendor_id=vendor.id and likes.user_id=$1;", [req.session.user.id])
    .then(function(result){
        res.locals.dressLikesCount=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
} 


vendor.floristLikesCount = function(req,res,next){

    db.one("select count(likes.*) as floristCount from likes, vendor  where vendor.category='florist' and likes.vendor_id=vendor.id and likes.user_id=$1;", [req.session.user.id])
    .then(function(result){
        res.locals.floristLikesCount=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
} 

vendor.cakeLikesCount = function(req,res,next){

    db.one("select count(likes.*) as cakeCount from likes, vendor  where vendor.category='cake' and likes.vendor_id=vendor.id and likes.user_id=$1;", [req.session.user.id])
    .then(function(result){
        res.locals.cakeLikesCount=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
} 

vendor.like = function(req,res,next){
    var like = {
        user: req.session.user.id,
        vendor: req.body.like
    }

    db.one(`INSERT INTO likes ( user_id , vendor_id) VALUES ($1,$2);`, [like.user, like.vendor])
    .then(function(result){
        res.locals.like=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}


// SELECT count(vendor.name) FROM vendor,likes,users WHERE  user_id =1 AND vendor.category='venue';

vendor.allLikes = function(req,res,next){
    db.manyOrNone("SELECT vendor.name,vendor.id,vendor.pic FROM vendor,likes,users WHERE likes.user_id= users.id AND user_id =$1;",[req.session.user.id] )
    .then(function(result){
        res.locals.allLikes=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

// vendor.like = function(req,res,next){
//     var like = {
//         vendor: req.body.like
//     }

//     db.one(`INSERT INTO vendor ( name , category ) VALUES ($1,$2);`, [like.vendor, 'venue'])
//     .then(function(result){
//         res.locals.like=result;
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }



vendor.find = function(req,res,next){
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM vendor WHERE id=$1 ;" , [id])
    .then(function(result){
        res.locals.vendor=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}


module.exports = vendor;