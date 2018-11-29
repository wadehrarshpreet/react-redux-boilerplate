const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const helpers = require('./helpers');
const WebpackChunkHash = require('webpack-chunk-hash');
const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

// the path(s) that should be cleaned
let pathsToClean = ['dist/*']

// the clean options to use
let cleanOptions = {
    root: helpers.root(),
    verbose: true,
    dry: false
}
module.exports = {
    entry: {
        app: helpers.root('src/index.js')
    },
    output: {
        path: helpers.root('dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.html']
    },

    module: {
        rules: [
            // JS files
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            // SCSS files
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })]
                        }
                    },
                    'sass-loader'
                ]
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        new HtmlWebpackPlugin({
            template: helpers.root('src/public/index.html'),
            inject: 'body',
            hash: true
        }),

        new MiniCssExtractPlugin({
            filename: isProd
                ? 'css/[name].[chunkhash].css'
                : 'css/[name].css',
            chunkFilename: !isProd
                ? '[id].css'
                : '[id].[chunkhash].css'
        }),

        new CopyWebpackPlugin([
            {
                from: helpers.root('src/public')
            }
        ]),
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        new WebpackChunkHash({algorithm: 'md5'})
    ]
};
