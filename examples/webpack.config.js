const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    list: path.resolve(__dirname, 'list/index.jsx'),
    form: path.resolve(__dirname, 'form/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader?babelrc=.babelrc',
      },
    }],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
}
