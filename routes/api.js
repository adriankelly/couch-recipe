var express = require('express');
var router = express.Router();

// Connect to CouchDB
var nano = require('nano')('http://localhost:5984');
var recipe = nano.db.use('recipe');

router.get('/recipe', function(req, res) {
  recipe.view('all_recipe', 'all_recipe', function(err, body, header) {
    if (!err) {
      res.status(200).json(body.rows);
    } else {
      console.log(err);
    }
  })
});

router.get('/recipe/:id', function(req, res) {
  recipe.get(req.params.id, function(err, body) {
      res.status(200).json(body);
  })
});

router.put('/recipe', function(req, res) {
  console.log('here')
  // recipe.insert({_id: req.params._id, _rev: req.params._rev}, function(err, body) {
  //     res.send(body);
  //     if(!err) {
  //       console.log(body);
  //     } else {
  //       console.log(err);
  //     }
  // })
});

module.exports = router;
