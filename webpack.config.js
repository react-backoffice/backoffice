const path = require('path')
const webpack = require('webpack')

const defaultPath = '__tests__/visual/'

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.resolve(__dirname, defaultPath, 'app.jsx'),
    ],
  },
  devtool: 'inline-sourcemap',
  cache: true,
  output: {
    path: path.resolve(__dirname, defaultPath, 'dist/'),
    filename: '[name].js',
    publicPath: '/static/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, defaultPath),
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader?babelrc',
          options: {
            presets: [
              'env',
              'react',
            ],
            plugins: [
              'transform-class-properties',
              'transform-regenerator',
              'transform-object-rest-spread',
              'react-hot-loader/babel',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
