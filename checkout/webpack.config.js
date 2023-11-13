const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'checkout',
      filename: 'remoteEntry.js',
      exposes:{
        './CheckoutMain': './src/app/app.module.ts',
      },
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};