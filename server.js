const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const apiRoutes = require('./routes/apiRoutes');

const path = require("path");

const PORT = process.env.PORT || 3001;

// Define middleware here

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use('/api', apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const dbUrl = process.env.DATABASE;
const host = process.env.HOST;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose
  .connect(process.env.MONGODB_URI || `mongodb://${host}/${dbUrl}`, options)
  .then(() => {
    app.listen(PORT, function () {
      console.log('Node server is running...');
      console.log('Listening on port:', PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
