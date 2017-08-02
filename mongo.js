const MongoClient = require('mongodb').MongoClient;

let database = null;

function connect(url, callback) {
  // this is here to make sure no one accidentally creates two connections to the server, which is unnecessary.
  if (database !== null) {
    return database;
  }

  MongoClient.connect(url, function(err, db) {
    // errors can happen when connecting, so handling errors is something to return to at some point.

    database = db
    callback()
  })
}

function db() {
  return database;
}

module.exports = {
  connect: connect,
  db: db
}
