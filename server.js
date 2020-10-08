const express = require("express");
const app = express();
const PORT = process.env.PORT 3000;

//sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const htmlRoutes = require('./routes/htmlRoutes.js')
app.use(htmlRoutes);

const apiRoutes = require('./routes/apiRoutes.js')
app.use("/api", apiRoutes);

//These stay at the bottom of the page as listeners
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})