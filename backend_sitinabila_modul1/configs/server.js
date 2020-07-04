const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 3080;


const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'DB_Keluarga_Berencana'
});
 
// connect to database
connection.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('../routes');
routes(app);