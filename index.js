var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var Sighting = require('./models/sighting');

var sightingCtrl = require('./controllers/SightingCtrl');

var port = 9045;
var app = express();
var mongoURI = 'mongodb://localhost:27017/mini-birds-mongoose';

mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
    console.log('Connected to mongodb at: ', mongoURI);
});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/sighting', sightingCtrl.read);
// app.get('/api/sighting/:id', sightingCtrl.index);
app.post('/api/sighting', sightingCtrl.create);
app.put('/api/sighting/:id', sightingCtrl.update);
app.delete('/api/sighting/:id', sightingCtrl.delete);

app.listen(port, function(err){
    if (err) {
        return console.log(err);
    }
    console.log("Now listening for stuff on port: ", port)
})