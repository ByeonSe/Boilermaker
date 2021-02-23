/*
The sequelize package exports the Sequelize constructor 
to create an instance of sequelize, which is what creates the connection to your database 
(this is why it's sometimes stored in a variable called 'db' - it represents your database). 
You will also use this instance to do things like define your models. 
This is why it's often a good idea for the instance of sequelize to be created in its own module.
*/

const Sequelize = require('sequelize')
const pkg = require('../../package.json')

// We'll need to reset the database many times while we're testing, and
// it'd be a major bummer if we lost all of the data that we made while
// playing aound with the app in the browser. We'll check to see if the node
// node environment is 'test', in which case we'll use the test database.
// Otherwise, the app connects with the normal database.
const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}-test` : pkg.name
console.log(`Opening database connection to ${dbName}`)

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`, {
  logging: false,
})

module.exports = db