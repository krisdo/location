const webpack = require('webpack');
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
// const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: __dirname + '/client/app.jsx',
  module: {
    rules: [
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
  plugins: [
    // new Dotenv()
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed
    })
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'   }
 
}