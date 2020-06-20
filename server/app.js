const express = require('express');
const app = express();
const port = 2001;
const db = require('../database-mongodb/index.js')

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

app.get('/api/location/:listingId', (req, res) => {

  const listingId = req.params.listingId;
  db.Location.find({listingId})
  .then((results) => {
    res.send(results);
  })
  .catch((err) => {
    console.log('Did not find listing');
  })

});