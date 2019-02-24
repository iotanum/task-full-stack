const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const chalk = require('chalk')
const config = require('./src/config')

console.log(chalk.bold(`Build enviroment: ${chalk.green(config.env)}`))

module.exports = {
  mode: config.isDev ? 'development' : 'production',

  entry: {
    index: './src/index.js',
  },

  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./build'),
    publicPath: '/',
  },

  devtool: config.isDev ? 'source-map' : false,
  target: 'web',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(webpack-dev-server|node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].[hash:16].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: config.isDev,
              sourceMap: config.isDev,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].[hash:16].css',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: config.isDev,
              sourceMap: config.isDev,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: config.isDev,
              ident: 'postcss',
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('postcss-preset-env')(),
                require('cssnano')(),
              ],
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: config.isDev,
              removeComments: !config.isDev,
              collapseWhitespace: true,
              attrs: ['img:src', 'link:href', 'script:src', 'div:data-bg'],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: false,
    https: false,
    noInfo: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    inject: true,
    chunks: ['index'],
  }),
],
}
