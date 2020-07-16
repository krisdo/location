const express = require('express');
const path = require('path');
const app = express();
const db = require('../database-mongodb/index.js')
// const mongoSeeding = require('../database-mongodb/seed.js')

/* this is for query params URL */
// app.use(express.static(path.join(__dirname, '../public')));


app.use('/:listingId', express.static(path.join(__dirname, '../public')));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* Alternative: use CORS npm pkg */
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



app.get('/api/location/:listingId', (req, res) => {

  const listingId = req.params.listingId;
  db.Location.find({listingId})
  .then((results) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json(results[0]);
  })
  .catch((err) => {
    res.status(404);
    console.log('Did not find listing');
  })

});

module.exports = app;