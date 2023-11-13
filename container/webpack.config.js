const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        checkout: 'checkout@http://localhost:4200/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
};

