const path = require('path')

const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, '__tests__/visual/app.jsx'),
    ],
  },
  devtool: DEBUG ? 'inline-sourcemap' : false,
  cache: true,
  output: {
    path: path.resolve(__dirname, '__tests__/visual/dist/'),
    filename: '[name].js',
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
}
