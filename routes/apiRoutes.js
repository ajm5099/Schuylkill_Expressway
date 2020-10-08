const express = require("express");
const router = express.Router();

//build data structures
const tableDataObj = require("../data/tables.js");
const waitlistDataObj = require("../data/waitlist.js");
//array of reservations (tables)
let tableData = tableDataObj.tableData;
//array of waitlist
let waitlistData = waitlistDataObj.waitlistData;

//get route for table data
router.get("/tables",function(req,res) {
    res.json(tableData)
})

//get route for waitlist data
router.get("/waitlist",function(req,res) {
    res.json(waitlistData)
})

//get route for clear table data
router.get("/clear",function(req,res){
    tableData=[];
    waitlistData=[];
    res.send("DELETED!")
})

//POST route to add a reservation to either tables or waitlist
router.post("/tables",function(req,res){
    let hasTable = false;
    if(tableData.length<5){
        tableData.push(req.body)
        hasTable=true
    } else {
        waitlistData.push(req.body)
    }
    res.json(hasTable)
})

module.exports = router;