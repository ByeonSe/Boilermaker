//NODE: I removed sync from this file since I think I synced database in ./script/seed.js file 
//const { db } = require('./server/db/index')
const app = require('./server')

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!

// app.listen(port, function () {
//   console.log(`Your server, listening on port ${port}`);
// });

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
//   .then(() => {
//     console.log('db synced')
//   })
app.listen(port, () => console.log(`listening on port ${port}`))