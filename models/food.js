const Mongo = require('../mongo');

function getAll(callback) {
  const db = Mongo.db();

  db.collection('foods').find().toArray(function(err, docs) {
    callback(err, docs);
  });
}

module.exports = {
  getAll: getAll
};
