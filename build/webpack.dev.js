/**
 * @file webpack config
 * @author hanxiaofang
 */
const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const publicPath = '';

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        index: [path.join(__dirname, '../src/index')]
    },
    output: {
        publicPath: '/',
        filename: `${publicPath}js/[name]-[hash:5].js`,
        chunkFilename: `${publicPath}js/[name].[hash:5].js`
    },
    resolve: {
        extensions: ['.jsx', '.js', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        }
    },
    module: {
        rules:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9' // React doesn't support IE8 anyway
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: {
                                'primary-color': '#3A61F7'
                            },
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|ttf|svg|pdf|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8848,
        hot: true,
        open: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
        }
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: path.join(__dirname, '../public/index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
