require("dotenv").config();
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://tanmay:mongodb@stackoverflow.qllej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
