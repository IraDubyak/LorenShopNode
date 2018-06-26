var express = require("express");
var womanCategoriesRouter = express.Router();
var sqlcon = require("../sql_connect");
var sql = require('mysql');

var execQuery = function (query, res) {
    sqlcon.query(query, function (err, ress) {
        if (err) {
            console.log("Error while querying database :- " + err);
            res.send(err);
        }
        else {
            res.send(ress);
        }
    });
}

womanCategoriesRouter.get("/", function(req , res){
    var query = "SELECT * FROM categories WHERE id_sex_category=1";
    execQuery(query, res);
});


module.exports = womanCategoriesRouter;

