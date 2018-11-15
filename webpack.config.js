var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'scripts-react-dist');
var APP_DIR = path.resolve(__dirname, 'scripts-react');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      }

};

module.exports = config;
