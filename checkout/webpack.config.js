const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: "http://localhost:4200/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'checkout',
      filename: 'remoteEntry.js',
      exposes:{
        './CheckoutMain': './src/app/app.module.ts',
      },
      shared: {
        '@angular/core': {eager: true, singleton: true},
        '@angular/common': {eager: true, singleton: true},
        '@angular/router': {eager: true, singleton: true},
      }
    }),
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // })
  ]
};
