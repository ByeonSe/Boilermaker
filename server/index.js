const express = require('express');
//create an app
const app = express()
const path = require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');

//loging middleware 
app.use(morgan('dev'));


//body parsing middleware if you want to use it in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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