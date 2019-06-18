const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: './src/script/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-[contenthash].js"
    },
    devServer: {
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // "style-loader/url", "file-loader"
                    // "style-loader", "css-loader"
                    { loader: "style-loader/url" },
                    { loader: "file-loader" ,
                        options: {
                            name: "[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                      {
                          loader: MiniCssExtractPlugin.loader
                      }, 
                      {
                          loader: "css-loader"
                      }, 
                      {
                          loader: "sass-loader"
                      }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/
        })
        // new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), {})
    ]
};