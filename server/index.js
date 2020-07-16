const app = require('./app');
const port = process.env.PORT || 2001;
require('dotenv').config();

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});