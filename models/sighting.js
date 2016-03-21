var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    name: { type: String, lowercase: true, required: true },
    order: { type: String, lowercase: true, maxlength: 20, required: true },
    status: { 
        type: String, 
        lowercase: true, 
        enum: [
            'extinct',
            'extinct in the wild',
            'critically endangered',
            'endangered',
            'vulnerable',
            'near threatened',
            'conservation dependent',
            'least concern'
          ]},
    numberSeen: { type: Number, min: 1 },
    confirmed: { type: Boolean, default: false },
    
    
})


module.exports = mongoose.model( 'Sighting', schema );