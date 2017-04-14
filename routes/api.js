var express = require('express');
var router = express.Router();

// Connect to CouchDB
var nano = require('nano')('http://35.185.14.52:5984/');
var recipe = nano.db.use('recipe');

router.get('/recipe', function(req, res) {
  recipe.view('all_recipes', 'all', function(err, body) {
    if (!err) {
      res.json(body.rows);
    }
  });
});

router.get('/recipe/:id', function(req, res) {
  recipe.get(req.params.id, function(err, body) {
      res.status(200).json(body);
  })
});

router.put('/recipe/:id', function(req, res) {
  recipe.insert(req.body, function(err, body) {
      if(!err) {
        res.send({redirect: '/recipes'});
      } else {
        console.log(err);
      }
  })
});

module.exports = router;
