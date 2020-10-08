const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

//get route for homepage
router.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "../views/reserve.html"))
})

module.exports = router;