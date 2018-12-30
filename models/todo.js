var db = require('../db/config');
var todo = {};

// todo.getAll = function (req,res,next){
//     db.manyOrNone("SELECT * FROM todo WHERE users_id=$1  ;",[req.session.user.id ])
//     .then(function(result){
//         res.locals.todo=result;
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }
// todo.search = function (req,res,next){
//     db.manyOrNone("SELECT * FROM todo  where name LIKE '$1%';", req.body.search)
//     .then(function(result){
//         res.locals.search=result;
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }
todo.getCompleted = function (req,res,next){
    db.manyOrNone("SELECT * FROM todo where completion=true AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.todo=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

todo.getRemaining = function (req,res,next){
    db.manyOrNone("SELECT * FROM todo WHERE completion=false AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.todo=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

todo.addDummyData= function(req,res,next){

    db.one(`INSERT INTO todo (task,completion,users_id) VALUES('Make a checklist ',false, (select id from users where id=$1)) ;`, [req.session.user.id ])
    .then(function(result){
        res.locals.todo=result;
        console.log(res.locals.todo);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

todo.find = function(req,res,next){
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM todo WHERE id=$1 ;" , [id])
    .then(function(result){
        res.locals.todo=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}


todo.completed = function(req,res,next){
    db.oneOrNone("SELECT COUNT(task) AS count FROM todo WHERE completion='1' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.todoCompleted=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

todo.remaining = function(req,res,next){
    db.oneOrNone("SELECT COUNT(task) AS count FROM todo WHERE completion='0' AND users_id=$1  ;",[req.session.user.id ])
    .then(function(result){
        res.locals.todoRemaining=result;
        console.log(result);
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

// todo.create = function(req,res,next){
//     var todo = {
//         task: req.body.task,
//         description: req.body.description,
//         notes:req.body.notes,
//     }

//     db.one(`INSERT INTO todo (task , description, notes) VALUES ($1,$2) RETURNING id;`, [todo.task, todo.description,todo.notes, req.params.id])
//     .then(function(result){
//         res.locals.todo_id=result.id;
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }

todo.create = function(req,res,next){
    var todo = {
        task: req.body.task,
        description: req.body.description,
        notes:req.body.notesN,
    }

    db.one(`INSERT INTO todo (task , description, notes,completion, users_id) VALUES ($1,$2,$3,$4,$5) returning id;`, [todo.task, todo.description, todo.notes,false,req.session.user.id])
    .then(function(result){
        res.locals.todo_res=result;
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

// todo.update = function (req,res,next){
//     var todo = {
//         task: req.body.task,
//         description: req.body.description,
//         notes:req.body.notes,
//     }
//     db.one(`UPDATE todo SET task = $1 , description = $2 ,notes=$3 WHERE id = $4 RETURNING id;`,[todo.task, todo.description,todo.notes, req.params.id])
// .then(function (result){
//     res.locals.todo_id=result.id;
//     next();
// })
// .catch(function(error){
//     console.log(error);
//     next();
// })
    
// }

todo.edit = function (req,res,next){
    var todo = {
        task: req.body.name
    }
    db.one(`UPDATE todo SET task = $1 ,completion = $2 , notes=$3, users_id=$5 WHERE id = $4 ;`,[todo.task, req.body.edit === "true" ? true : false, req.body.notesE, req.body.edit1,req.session.user.id])
.then(function (result){
    res.locals.todo_id=result.id;
    next();
})
.catch(function(error){
    console.log(error);
    next();
})
    
}



todo.done = function (req,res,next){
    db.one(`UPDATE todo SET completion = $2 , users_id=$3 WHERE id = $1  ;`,[req.body.editId,true, req.session.user.id])
    // db.one(`UPDATE todo SET completion = $1 WHERE id = $2;`,[(req.body.edit == 'true' ? true : false), req.body.id ])
.then(function (result){
    res.locals.todo_id=result;
    console.log('done');
    next();
})
.catch(function(error){
    console.log(error);
    next();
})  
}

// todo.notYet = function (req,res,next){
//     db.one(`UPDATE todo SET completion = $2 , users_id=$3 WHERE id = $1  ;`,[req.body.editIdF,false, req.session.user.id])
//     // db.one(`UPDATE todo SET completion = $1 WHERE id = $2;`,[(req.body.edit == 'true' ? true : false), req.body.id ])
// .then(function (result){
//     res.locals.todo_id1=result;
//     console.log('done');
//     next();
// })
// .catch(function(error){
//     console.log(error);
//     next();
// })  
// }

// todo.delete = function (req,res,next){
//     db.none(`DELETE FROM todo WHERE id=$1 `, [req.params.id])
//     .then(function (){
//         console.log('success delete');
//         next();
//     })
//     .catch(function(error){
//         console.log(error);
//         next();
//     })
// }
todo.delete1 = function (req,res,next){
    db.none(`DELETE FROM todo WHERE id=$1 ;`, [req.body.deleteTodo])
    .then(function (){
        console.log('success delete');
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}
module.exports = todo;