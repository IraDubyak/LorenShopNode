var express = require("express");
var orderItemRouter = express.Router();
var sqlcon = require("../sql_connect");
var sql = require('mysql');
var bodyParser = require("body-parser");

// var execQuery = function (query, res) {
//     sqlcon.query(query, function (err, ress) {
//         if (err) {
//             console.log("Error while querying database :- " + err);
//             res.send(err);
//         }
//         else {
//             res.send(ress);
//         }
//     });
// }

// usersRouter.get("/", function(req , res){
//     var query = "select * from products";
//     execQuery(query, res);
//     // res.send('products');
// });
const thinkingStatus = "think";


orderItemRouter.use(bodyParser.urlencoded({
    extended: true
}));

orderItemRouter.use(bodyParser.json());

orderItemRouter.post('/', function(request, response){
    var temporaryObject = request.body;
    var sqlForProductDetails = `SELECT id_product_details FROM productdetails WHERE size = '${temporaryObject.size}' AND id_product = '${temporaryObject.product_id}'`;
    var sqlForOrders = `SELECT id_order FROM orders WHERE id_user = '${temporaryObject.user_id}' AND status = '${thinkingStatus}'`;
    var orderItem = {
    	quantity: temporaryObject.quantity,
    	size: temporaryObject.size,
    	
    };
    sqlcon.query(sqlForProductDetails, function (err, result) {
    	orderItem.id_product_details = result[0].id_product_details;
        sqlcon.query(sqlForOrders, function (err, result) {
	        if(result.length == 0) {
                var d = new Date();
	        	var sqlForInsertOrders = `INSERT INTO orders (delivery_time, delivery_date, created, delivery_method, status, id_user) VALUES ('${sqlcon.escape(d.getTime())}', '${d.getDate()}', '${d}','ukr', 'think', '${temporaryObject.user_id}')`;
	            console.log(sqlForInsertOrders);
                sqlcon.query(sqlForInsertOrders, function (err, result) {
                    console.log(result);
                orderItem.id_order = result.insertId;
                });
            } else {
	        	orderItem.id_order = result[0].id_order;
	        }
	        setTimeout(function(){
                var sql = `INSERT INTO orderitems ( quantity, size, id_product_details, id_order) VALUES ('${orderItem.quantity}', '${orderItem.size}', '${orderItem.id_product_details}', '${orderItem.id_order}')`;
            // console.log(sql);
            sqlcon.query(sql, function (err, result) {
            response.send(result);
            if (err) throw err;
                // console.log("1 record inserted");
            });
            }, 30);
    	}); 
    });
    
    
});

orderItemRouter.post('/checkout', function(request, response){
    var orderItemsArray = request.body;
    var id_order = orderItemsArray[0].id_order;
    var sql =  `UPDATE orders SET status = 'in progress' WHERE id_order = '${id_order}'`;
    sqlcon.query(sql, function (err, result) {
    });
});
module.exports = orderItemRouter;



