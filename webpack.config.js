const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './views/app.jsx',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [
          { test: /\.jsx$/,loader: 'babel-loader',exclude: /node_modules/ },
          //{ test: /\.js$/,loader: 'ify-loader'},
          { test: /\.css/,use: [MiniCssExtractPlugin.loader,'css-loader'] }
       ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      })
    ],
    devtool: 'source-map'
}