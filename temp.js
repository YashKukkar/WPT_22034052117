
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser = require('body-parser');


const mysql = require('mysql2');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
	port:3306
});





app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result ="";


// app.post('/poc1', function (req, res) {
	
// 		console.log('req :>> ', req.body);
// 		console.log('res :>> ', res.body);
		
//     	var xyz ={ v1:37, v2:35};
//         res.send(xyz);
//     });


app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query);
		connection.query("update book set price = ?", [req.query.bookPrice], (err, res1) => {
			if (err) {
				result = err;
				console.log("trouble " + err);
			} else {
				result = res1;
				console.log("success" + result)
			}
			
			console.log("38 ",);
			res.send(result);
		});
    	

		res.send(xyz);

		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
	app.get('', function (req, res) {
    
	
        console.log(req.query.id);
		connection.query("select * from book where bookID = ?", [req.query.id], (err, res1) => {
			if (err) {
				result = err;
				console.log("trouble " + err);
			} else {
				result = res1;
				console.log("success" + result)
			}
			
			console.log("38 ",);
			res.send(result);
		});

		});
});