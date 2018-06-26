var express = require("express");
var cartRouter = express.Router();
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

cartRouter.get("/", function(req , res){

    var query = "SELECT orderitems.id_order_item, orderitems.quantity, orderitems.size, orderitems.id_order, products.name, products.image, products.brand, products.price FROM orderitems INNER JOIN productdetails ON productdetails.id_product_details=orderitems.id_product_details INNER JOIN products ON products.id_product=productdetails.id_product INNER JOIN orders ON orderitems.id_order = orders.id_order WHERE orders.status='think'";
    execQuery(query, res);
    // res.send('products');
});

module.exports = cartRouter;

