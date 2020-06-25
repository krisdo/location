const mongoose = require('mongoose');

module.exports.mongoose = mongoose;

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/airbrb-loc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const locationSchema = mongoose.Schema({
  listingId: {type: Number, unique: true},
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    latitude: Number,
    longitude: Number
  },
  description: String,
  gettingAround: String,
});

const Location = mongoose.model('Location', locationSchema);

module.exports.Location = Location;
