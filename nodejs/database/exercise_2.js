const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const { error } = require('console');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Start the server
app.listen(5000);
console.log('ready to accept request');