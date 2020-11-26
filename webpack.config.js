const nodeExternals = require('webpack-node-externals');
 const path = require('path');
 module.exports = {
    // Use env.<YOUR VARIABLE> here:

     target: 'node',
     externals: [nodeExternals()],
     entry: {
         'index': './src/index.js'
     },
     output: {
         path: path.join(__dirname, 'dist'),
         filename: '[name].bundle.js',
         libraryTarget: 'commonjs2',
     },
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             use: 'babel-loader'
         }]
     }

 }
