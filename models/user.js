var bcrypt = require('bcrypt');
var db = require('../db/config');
var user = {};

user.find = function(req, res, next){
  db.one("SELECT * FROM users WHERE id=$1;", [req.params.id])
    .then(function(result){
      res.locals.user = result;
      next();
    })
    .catch(function (error) {
      console.log(error);
      next();
    })
}

user.wedDate = function(req, res, next){
    db.one("SELECT DATE_PART('day', wedding_date::timestamp - CURRENT_DATE::timestamp) AS night from users WHERE id=$1;", [req.params.id])
      .then(function(result){
        res.locals.wedDate = result;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

user.create = function(req, res, next){
  db.one("INSERT INTO users (email, password_digest, name, phone, wedding_date) VALUES($1, $2,$3,$4,$5) RETURNING *;",
        [req.body.email.toLowerCase(), bcrypt.hashSync(req.body.password, 10),req.body.username,req.body.phone,req.body.weddingDate])
    .then(function(result){
      req.session.user = result;
      res.locals.userId = result.id;
      next();
    })
    .catch(function(error){
      console.log(error);
      next();
    })
}

module.exports = user;