const path = require('path')
const webpack = require('webpack')

const LIBRARY_NAME = 'backoffice'

module.exports = {
  mode: 'production',
  entry: {
    backoffice: path.resolve(__dirname, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: `${LIBRARY_NAME}.js`,
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [
    'react',
    'react-dom',
    'react-router-dom',
    'prop-types',
    /^(material-ui\/.*)$/i,
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader?babelrc=.babelrc.production',
      },
    }],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}
