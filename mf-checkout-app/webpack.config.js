const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  plugins: [
    new ModuleFederationPlugin({
      name: 'my_federation_app',
      filename: 'remoteEntry.js',
      exposes: {
        './MyComponent': './src/app/app.module.ts',
      },
    }),
  ],
};
