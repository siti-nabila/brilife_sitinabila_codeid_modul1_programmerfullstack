var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'DB_Keluarga_Berencana'
  });

connection.connect( function(err) {
    if (err) {
        throw err;
    }
});

module.exports = connection;