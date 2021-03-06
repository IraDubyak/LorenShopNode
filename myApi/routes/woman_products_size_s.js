var express = require("express");
var womanProductsRouterSizeS = express.Router();
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

womanProductsRouterSizeS.get("/", function(req , res){

    var query = "SELECT products.id_product, products.name, products.image, products.brand, products.price, products.color, products.description, products.id_category, productdetails.size, categories.id_sex_category FROM products INNER JOIN categories ON categories.id_category = products.id_category INNER JOIN productdetails ON products.id_product=productdetails.id_product WHERE categories.id_sex_category=1 AND productdetails.size = 'S'";
    execQuery(query, res);
    // res.send('products');
});

module.exports = womanProductsRouterSizeS;