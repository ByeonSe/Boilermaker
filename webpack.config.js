const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './app/main'), // assumes your entry point is ./client/app in the root of your project folder
    mode: 'development',
    output: {
      path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
      filename: 'bundle.js' // the name of the file that will contain our output - we could name this whatever we want, but bundle.js is typical
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        // use the style-loader/css-loader combos for anything matching the .css extension
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ]
        }
      ]
    }
  }