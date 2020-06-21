const expect = require('chai');

describe('Unique listingIds', function () {
  it('should return 100 unique listingIds', function (done) {
    db.Host.find({})
    .then((results) => {
      return results.reduce( (accumulator, current) => {
          return accumulator.concat(current.listingId);
      }, []);
    })
    .then( (listingIds) => {
      var unqiueListingIds = [...new Set(listingIds)];
      expect(listingIds.length).to.equal(100);
      expect(unqiueListingIds.length).to.equal(100);
      done();
    })
    .catch(done);
  });
});