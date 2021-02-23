//const { db } = require('./server/db')
const app = require('./server')

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});