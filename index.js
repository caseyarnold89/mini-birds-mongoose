var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var Sighting = require('./models/sighting');

var sightingCtrl = require('./controllers/SightingCtrl');

var port = 9045;
var app = express();
var mongoURI = 'mongodb://localhost:27017/mini-birds-mongoose';

app.use(bodyParser.json());
app.use(cors());

app.get('/api/sighting', function(req, res) {
    res.status(200).json('Hello everyone');
})
app.post('/api/sighting', sightingCtrl.create);
app.put('/api/sighting', function(req, res) {
    res.status(200).json('Hello everyone');
})
app.delete('/api/sighting', function(req, res) {
    res.status(200).json('Hello everyone');
})

app.listen(port, function(err){
    if (err) {
        return console.log(err);
    }
    console.log("Now listening for stuff on port: ", port)
})