var db = require('../db/config');
var budget = {};

budget.getTotal = function (req,res,next){
    db.manyOrNone("SELECT * FROM budget WHERE users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.budget=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
budget.addDummy= function(req,res,next){

    db.one(`INSERT INTO budget (amount,users_id) VALUES ($1,$2) ;`, [parseInt(req.body.amount),req.session.user.id ])
    .then(function(result){
        res.locals.budgetAmount=result;
        console.log(res.locals.budgetAmount);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.add = function(req,res,next){

    db.one(`INSERT INTO budget (amount,users_id) VALUES ($1,$2) ;`, [parseInt(req.body.amount),req.session.user.id ])
    .then(function(result){
        res.locals.budgetAmount=result;
        console.log(res.locals.budgetAmount);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.addDummyData= function(req,res,next){

    db.one(`INSERT INTO expenses (expense, amount, category,users_id) VALUES('Book your Venue',0,'venue', (select id from users where id=$1)),('Insurance',0,'venue', (select id from users where id=$1)),('Buy Your Wedding Dress',0,'dress', (select id from users where id=$1)),('Headpiece and Veil',0,'dress', (select id from users where id=$1)),('Bouquet',0,'florist', (select id from users where id=$1)),('Flower Girl Flowers',0,'florist', (select id from users where id=$1)),('Jewelry and Ring',0,'jewelry', (select id from users where id=$1)),('Trial',0,'artist', (select id from users where id=$1)),('Makeup Artist',0,'artist', (select id from users where id=$1)),('Hair Artist',0,'artist', (select id from users where id=$1)),('Order your Cake',0,'cake', (select id from users where id=$1)),('Print & Send Invitation Cards',0,'cards', (select id from users where id=$1)),('Band',0,'band', (select id from users where id=$1)),('Photographer',0,'photography', (select id from users where id=$1)),('Order Photo Album',0,'photography', (select id from users where id=$1)),('Snacks and Service',0,'catering', (select id from users where id=$1)),('Reception Rentals',0,'decoration', (select id from users where id=$1));`, [req.session.user.id ])
    .then(function(result){
        res.locals.budget=result;
        console.log(res.locals.budget);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.editBudget = function (req,res,next){
    db.one(`UPDATE budget SET amount = $1  WHERE users_id = $2;`,[parseInt(req.body.budgetEdit), req.session.user.id])
.then(function (result){
    res.locals.budgetEdited=result.id;
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
    
}

budget.getVenue = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='venue' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.venue=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getDress = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='dress' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.dress=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getFlorist = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='florist' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.florist=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getCatering = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='catering' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.catering=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getDecoration = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='decoration' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.decoration=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}


budget.getPhotography = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='photography' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.photography=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getBand = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='band' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.band=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getCards = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='cards' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.cards=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getCake = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='cake' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.cake=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getArtist = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='artist' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.artist=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getJewelry = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='jewelry' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.jewelry=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.getOthers = function (req,res,next){
    db.manyOrNone("SELECT * FROM expenses WHERE category='others' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.others=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.sum = function (req,res,next){
    db.one("SELECT SUM(amount) as total FROM expenses WHERE users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.sum=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

budget.sumVenue = function (req,res,next){
    db.one("SELECT SUM(amount) as sumvenue FROM expenses where category='venue' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.sumVenue=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
budget.sumDresses = function (req,res,next){
    db.one("SELECT SUM(amount) as sumdresses FROM expenses where category='dress' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.sumDresses=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })}

    budget.sumFlorist = function (req,res,next){
        db.one("SELECT SUM(amount) as sumflorist FROM expenses where category='florist' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumFlorist=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }


    budget.sumDecoration = function (req,res,next){
        db.one("SELECT SUM(amount) as sumdecoration FROM expenses where category='decoration' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumDecoration=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumCatering = function (req,res,next){
        db.one("SELECT SUM(amount) as sumcatering FROM expenses where category='catering' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumCatering=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumPhotography = function (req,res,next){
        db.one("SELECT SUM(amount) as sumphotography FROM expenses where category='photography' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumPhotography=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumBand = function (req,res,next){
        db.one("SELECT SUM(amount) as sumband FROM expenses where category='band' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumBand=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumCards = function (req,res,next){
        db.one("SELECT SUM(amount) as sumcards FROM expenses where category='cards' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumCards=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumCake = function (req,res,next){
        db.one("SELECT SUM(amount) as sumcake FROM expenses where category='cake' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumCake=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumArtist = function (req,res,next){
        db.one("SELECT SUM(amount) as sumartist FROM expenses where category='artist' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumArtist=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }


    budget.sumJewelry = function (req,res,next){
        db.one("SELECT SUM(amount) as sumjewelry FROM expenses where category='jewelry' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumJewelry=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }

    budget.sumOthers = function (req,res,next){
        db.one("SELECT SUM(amount) as sumothers FROM expenses where category='others' AND users_id=$1  ;",[req.session.user.id ])
        .then(function(result){
            res.locals.sumOthers=result;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
    }
    

// }
// budget.find = function(req,res,next){
//     var id = req.params.id;
//SOMETHING WENT WRONG HERE
//     db.oneOrNone("SELECT * FROM budget WHERE id=$1  AND users_id=$1  ;",[req.session.user.id ] , [id])
//     .then(function(result){
//         res.locals.budget=result;
//         console.log(result);
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }




budget.create = function(req,res,next){
    var budget = {
        expense: req.body.expense,
        amount: req.body.amountN,
        category:req.body.category,
    }

    db.one(`INSERT INTO expenses (expense , amount, category,budget_id,users_id) VALUES ($1,$2,$3,$4,$5) returning id;`, [budget.expense,budget.amount,budget.category,req.body.budgetnewex,req.session.user.id])
    .then(function(result){
        res.locals.budget_res=result;
        console.log(res.locals.budget_res);
        next();
    })
    .catch(function(error){
        console.log(error);
       
        next();
    })
}


// budget.createDummy = function(req,res,next){

//     db.one(`INSERT INTO expenses (expense , amount, category) VALUES ('buy flower', '0' , 'dress),('buy fff', '0' , 'venue) ;`)
//     .then(function(result){
//         res.locals.budget_dummy=result;
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }

budget.edit = function (req,res,next){
    db.one(`UPDATE expenses SET expense = $1 ,amount = $2 , budget_id=$3 WHERE id = $4;`,[req.body.expense, parseInt(req.body.amountE), req.body.budId,req.body.edit1])
.then(function (result){
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
    
}
// budget.edit = function (req,res,next){
  
//     db.one(`UPDATE expenses SET expense = $1 ,amount = $2 , budget_id=$3 WHERE id = $4;`,[req.body.expense, parseInt(req.body.amountE), req.body.budId,req.body.edit1])
// .then(function (result){
//     next();
// })
// .catch(function(error){
//     console.log(error);
//     next();
// })
    
// }


budget.delete1 = function (req,res,next){
    db.none(`DELETE FROM expenses WHERE id=$1 ;`, [req.body.delete1])
    .then(function (){
        console.log('success delete');
        next();
    })
    .catch(function(error){
        console.log("error" ,error);
        next();
    })
}
module.exports = budget;