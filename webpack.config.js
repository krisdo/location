const webpack = require('webpack');
// const dotenv = require('dotenv').config({path: __dirname + '/.env'});
// // const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: __dirname + '/client/app.jsx',
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'   }
 
}