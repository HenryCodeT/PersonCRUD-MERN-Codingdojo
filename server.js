// //// FIELDS ///////////////////
console.log("**************** 1-server ********************");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// using cors permitions
app.use(cors());
// midle ware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// This will fire our mongoose.connect statement to initialize our database connection
require('./server/config/mongoose.config')
// This is where we import the person routes function from our person.routes.js file
const AllMyPersonRoutes = require("./server/routes/person.routes");
AllMyPersonRoutes(app);

console.log("---------------- 1-server --------------------");
const server = app.listen(port, () =>
  console.log(`Fake API (Core) on port ${server.address().port}!`)
);