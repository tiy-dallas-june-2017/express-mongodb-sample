const router = require('express').Router();
const FoodModel = require('../models/food');

router.get('/foods', function(req, res) {

  const cb = function(err, docs) {
    res.json(docs);
  }

  FoodModel.getAll(cb);
});

module.exports = router;
