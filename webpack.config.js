const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: ['./app.js', './main.scss'],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0'] },
        }],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          'css-loader', 'sass-loader'
        ]),
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: '4800',
    stats: 'errors-only',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.bundle.css',
      allChunks: true,
    }),
  ],
}
