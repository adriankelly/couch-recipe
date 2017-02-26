var express = require('express');
var router = express.Router();

// Connect to CouchDB
var nano = require('nano')('http://localhost:5984');
var recipe = nano.db.use('recipe');


router.get('/recipe', function(req, res, next) {
  recipe.view('all_recipe', 'all_recipe', function(err, body, header) {
    if (!err) {
      res.status(200).json(body);
    } else {
      console.log(err);
    }
  })
});

module.exports = router;
