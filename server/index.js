const express = require('express');
//create an app
const app = express()
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');

const Sequelize = require('sequelize')
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect:'postgres',
});
const sessionStore = new SequelizeStore({ db : sequelize })
//loging middleware 
app.use(morgan('dev'));


//body parsing middleware if you want to use it in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session middleware with passport

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'my best friend is Cody',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

// auth and api routes
app.use('/auth', require('./auth'))
app.use('/api', require('./api'))


//static middleware 
app.use(express.static(path.join(__dirname, '../public')))

// mount all of your API routes on /api
app.use('/api', require('./api')) 

//our server should send its index.html for any requests that don't match one of our API routes.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });
//error handling middleware 500 (very end of our server entry file)
app.use((error, req, res, next) => {
    console.error(error);
    console.error(error.stack);
    //if (process.env.NODE_ENV !== 'test') console.error(error.stack)
    res.status(error.status || 500).send(error.message || 'Internal server error.');
})


module.exports = app