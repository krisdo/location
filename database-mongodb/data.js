const faker = require('faker');


const generateLocations = () => {

  let locations = [];
  let gettingAround = [faker.lorem.sentences(), null];

  for (let listingId = 0; listingId <= 99; listingId++ ) {

    locations.push({
      "listingId": listingId,
      "address": {
        "street": faker.address.streetAddress(),
        "city": faker.address.city(),
        "state": faker.address.state(),
        "zipCode": faker.address.zipCode(),
        "country": faker.address.country(),
        "latitude": faker.address.latitude(),
        "longitude": faker.address.longitude()
      },
      "description": faker.lorem.paragraph(),
      "gettingAround": faker.helpers.randomize(gettingAround)
    });
  }

  return locations;
};

module.exports = generateLocations;
