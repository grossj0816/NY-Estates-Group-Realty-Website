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
    required: false
  },
  Price:{
    type: String,
    required: true
  },
  Bed:{
    type: Number,
    required: true
  },
  Bath:{
    type: Number,
    required: true
  },
  PropertyType:{
    type: String,
    required: true
  },
  Stories:{
    type: String,
    required: false
  }
});


let Listing = module.exports = mongoose.model('Listing', listingSchema);
