'use strict'

const {Location} = require('../../database-mongodb/index.js');
// const app = require('../server/app.js');
const chai = require('chai');
const chaiHttp = require("chai-http");
const { expect } = chai;
const should = chai.should();


chai.use(chaiHttp);
describe("API Get Request", () => {
  
  it("Response is an object", done => {
    chai
      .request('http://localhost:2001')
      .get('/api/location/99')
      .end((err, res) => {

        expect(res).to.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('listingId')
        res.body.address.should.have.property('longitude');
        done();
      });
  });



});

describe('Location listingIds', function () {
  it('should return 100 listingIds', function (done) {
    Location.find({})
    .then((results) => {
      expect(results.length).to.equal(100);
      done();
    })
    .catch(done);
  });
});