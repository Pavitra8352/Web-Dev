const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./connection');
const { error } = require('console');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a new person (POST /person)
app.post("/person", function (request, response) {
    var { name, dob, salary, gender, photo } = request.body;

    if (name === undefined || dob === undefined || salary === undefined || gender === undefined || photo === undefined) {
        response.json([{ 'error': 'required input missing, kindly pass name, dob, salary, gender, photo' }]);
    }

    else {
        var sql = `insert into person (name, dob, salary, gender, photo) VALUES ('${name}','${dob}','${salary}','${gender}','${photo}')`;
        connection.con.query(sql, function (error, results) {
            if (error) {
                response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            }
            else
                response.json([{ 'error': 'no' }, { 'message': 'Person added successfully' }]);
        });
    }
});

// Get all persons (GET /person)
app.get("/person", function (request, response) {
    var sql = "select * from person order by id desc";
    connection.con.query(sql, function (error, results) {
        if (error)
            response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
        else {
            results.unshift({ 'total': results.length });
            results.unshift({ 'error': 'no' });
            response.json(results);
        }
    });
});

// Update a person (PUT /person)
app.put("/person", function (request, response) {
    let { id, name, dob, salary, gender, photo } = request.body;
    if (name === undefined || dob === undefined || salary === undefined || gender === undefined || photo === undefined) {
        response.json([{ 'error': 'required input missing, kindly pass name, dob, salary, gender, photo, id' }]);
    }
    else {
        var sql = `update person set name='${name}', dob='${dob}', salary=${salary}, gender=${gender}, photo='${photo}' where id=${id}`;
        connection.con.query(sql, function (error, results) {
            if (error) {
                response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            }
            else {
                if (results.affectedRows === 0) {
                    response.json([{ 'error': 'no' }, { 'message': 'person not found' }]);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'message': 'person updated' }]);
                }
            }
        });
    }
});

// Delete a person (DELETE /person)
app.delete("/person", function (request, response) {
    var id = request.body.id;
    if (id === undefined) {
        response.json([{ 'error': 'required input missing, kindly pass id' }]);
    }
    else {
        var sql = `delete from person where id=${id}`;
        connection.con.query(sql, function (error, results) {
            if (error)
                response.json([{ 'error': 'oops, something went wrong, contact developer' }]);
            else {
                if (results.affectedRows === 0) {
                    response.json([{ 'error': 'no' }, { 'message': 'person not found' }]);
                }
                else {
                    response.json([{ 'error': 'no' }, { 'message': 'person deleted' }]);
                }
            }
        });
    }
});

// Start the server
app.listen(5000);
console.log('ready to accept request');