let mongoose = require('mongoose');

//Article Schema
//This allows programmer to structure json data in an easier way
let listingSchema = mongoose.Schema({
  Address:{
    type: String,
    required: true
  },
  Status:{
    type: String,
    required: true
  },
  Price:{
    type: String,
    required: true
  },
  PropertyType:{
    type: String,
    required: true
  }
});


let Listing = module.exports = mongoose.model('Listing', listingSchema);
