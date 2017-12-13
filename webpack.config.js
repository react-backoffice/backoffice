const path = require('path')
const webpack = require('webpack')

const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    'app': [
      'babel-polyfill',
      path.resolve(__dirname, '__tests__/visual/app.jsx')
    ]
  },
  devtool: DEBUG ? 'inline-sourcemap' : false,
  cache: true,
  output: {
    path: path.resolve(__dirname, '__tests__/visual/dist/'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'react'
            ],
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
}
