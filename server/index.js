const app = require('./app');
const port = 2001;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});