const express = require("express"); // our express server
const app = express(); // generate an app object
const bodyParser = require("body-parser"); // requiring the body-parser

const url = "mongodb://localhost:27017/testdb";
const mongoose = require("mongoose");
const Comment = require("./models/comment");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";

const PORT = process.env.PORT || 3000; // port that the server is running on => localhost:3000
app.use(bodyParser.json()); // telling the app that we are going to use json to handle incoming payload

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "Connection error"));
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

Comment.find({}, function (err, document) {
  if (err) {
    logger.error("error in finding comment document");
  }
  console.log(document);
});

app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`); // print this when the server starts
});
