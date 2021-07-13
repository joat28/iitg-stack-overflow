require("dotenv").config();
const mongoose = require("mongoose");
const DB =
	process.env.DB_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connected");
    // mongoose
    // .model(users)
    // .collection.createIndex( { "inviteCode": 1 });
    module.exports = mongoose.connection;
  })
  .catch((err) => console.log(err));
