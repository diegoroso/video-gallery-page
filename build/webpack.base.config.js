const webpack = require('webpack')
    , path = require('path')
    , vueConf = require('./vue-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.join(__dirname, '..', 'src')
const app = path.join(src, 'app')

module.exports = {
    devtool: 'source-map',

    entry: {
        app: path.join(src, 'main.js'),
        vendor: Object.keys(require('../package').dependencies)
    },

    output: {
        path: path.join(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        modules: [path.resolve(__dirname, '..', 'node_modules')],
        alias: {
            _src: src,
            _views: path.join(app, 'views'),
            _store: path.join(src, 'store'),
            _services: path.join(src, 'services'),
            _sass: path.join(src, 'assets', 'scss'),
            _component: path.join(app, 'components'),
            _npm: path.join(__dirname, '..', 'node_modules')
        }
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /.(vue|js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueConf
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)(\?v=[a-z0-9=\.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'template.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        })
    ]
}
