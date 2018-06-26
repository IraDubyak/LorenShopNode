var express = require("express");
var loginRouter = express.Router();
var bodyParser = require("body-parser");
var sqlcon = require("../sql_connect");

var execQuery = function (query, res) {
    sqlcon.query(query, function (err, ress) {
        if (err) {
            console.log("Error while querying database :- " + err);
            res.send(err);
        }
        else {
            var object = ress[0];
            object.sessionId = Math.random();
            res.json(object);
        }
    });
}
loginRouter.use(bodyParser.json());

loginRouter.post("/", function(req , res){
    var email = req.body.email;
    var password = req.body.password;
    var query = `SELECT * FROM users WHERE email ='${email}' AND password ='${password}'`;
    console.log(query);
    execQuery(query, res);
});


module.exports = loginRouter;