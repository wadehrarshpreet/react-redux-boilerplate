const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const helpers = require('./helpers');
const commonConfig = require('./webpack.common');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path')

module.exports = merge(commonConfig, {
    mode: 'production',

    output: {
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].chunk.js'
    },
    optimization: {
        namedChunks: true,
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [ // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true,
                    screw_ie8: true,
                    drop_console: true
                },
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    performance: {
        hints: false
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        historyApiFallback: true,
        compress: true,
        stats: 'errors-only' // none (or false), errors-only, minimal, normal (or true) and verbose
    }
});
