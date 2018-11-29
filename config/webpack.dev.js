const webpack = require('webpack');
const merge = require('webpack-merge');
const helpers = require('./helpers');
var path = require('path')
const commonConfig = require('./webpack.common');
console.log(process.env.NODE_ENV)
module.exports = merge(commonConfig, {
    devtool: 'eval-source-map',

    mode: 'development',

    entry: helpers.root('src/index.js'),
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/[id].chunk.js'
    },
    optimization: {
        namedChunks: true,
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        historyApiFallback: true,
        port: 3000,
        disableHostCheck: true,
        host: "0.0.0.0",
        compress: true,
        hot: true,
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    }
});
