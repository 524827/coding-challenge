const mongoose = require("mongoose");

exports.mongoConnection = () => {
  return mongoose.connect("mongodb://localhost:27017/db_demo", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

// module.exports = { mongoConnection };
