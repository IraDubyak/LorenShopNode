const express = require('express');
const bodyParser = require('body-parser');
var sql = require("mssql");

const app = express();
var sqlcon = require("./sql_connect");

app.use(bodyParser.urlencoded({
	extended:true
}));

app.get('/', (req, res) => {
	res.send('Welcome to my site :D');
});

app.get('/user', (req, res) => {
	console.log(req.query.userId);

	// console.log(sqlcon);
	// res.send(`USER ID: ${req.query.userId}`);

	console.log(sqlcon);

/*    var request = sql.Request(sqlcon);
    var query = 'SELECT * FROM users';
	request.query(query, function (err, ress) {
		if (err) {
			console.log("Error while querying database :- " + err);
			res.send(err);
		}
		else {
			res.send(ress);
		}
	});*/


});

app.listen(3000, () => {
	console.log('Server has started on port 3000');
});