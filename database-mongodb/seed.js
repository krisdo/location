
const {Location, mongoose} = require('./index.js');
const generateLocations = require('./data.js');


  Promise.resolve(generateLocations())
  .then( (locations) => {
    Location.create(locations)
    .then( () => {
      mongoose.disconnect();
    })
  });



