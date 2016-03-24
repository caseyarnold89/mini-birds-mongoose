var Sighting = require('../models/sighting');

module.exports = {
    
  create: function(req, res, next) {
    Sighting
        .create(req.body, function(err, result) {
            
            if (err) return next(err);
            res.status(200).json(result);
            
        })
  },
  
  read: function(req, res, next) {
      
      Sighting
        .find(req.query).exec(function(err, result) {
            
            if (err) return res.status(500).send(err);
            else res.send(result);
            
        })
      
  },
  
  update: function(req, res, next) {
      
      Sighting
        .findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
            function(err, result) {
                if (err) return next(err);
                res.status(200).json(result);
            }
        )
      
  },
  
  delete: function(req, res, next) {
      
      Sighting 
        .findByIdAndRemove(
            req.params.id,
            function(err, result) {
                if (err) return next(err);
                res.status(200).json(result);
            }
        )
      
  }
  
    
}