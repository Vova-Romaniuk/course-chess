const {MongoClient} = require('mongodb');
const {config} = require("dotenv")
config();
const url = process.env.ATLAS_URI;
console.log(url)
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

let dbConnection;


module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        console.log(err)
        return callback(err);
      }

      dbConnection = db.db("Chess");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};