const mongoose = require('mongoose');

module.exports.mongoose = mongoose;

mongoose.Promise = require('bluebird');

// const {
//   // MONGO_USERNAME,
//   // MONGO_PASSWORD,
//   // MONGO_HOSTNAME,
//   // MONGO_PORT,
//   MONGO_DB
// } = process.env;

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// const url = 'mongodb://mongo:27017/airbnb-location?authSource=admin';
const url = 'mongodb://mongo:27017/airbnb-location';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

//for docker
mongoose.connect(url, options)
.then( function() {
  console.log('MongoDB is connected');
})
.catch( function(err) {
  console.log(err);
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
