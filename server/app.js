const express = require('express');
const app = express();
const port = 2001;
const db = require('../database-mongodb/index.js')

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:1000/");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

app.get('/api/location/:listingId', (req, res) => {

  const listingId = req.params.listingId;
  db.Location.find({listingId})
  .then((results) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json(results[0]);
  })
  .catch((err) => {
    console.log('Did not find listing');
  })

});