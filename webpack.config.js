const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
    mode: production ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
        open: true,
        compress: true,
        hot: true,
        port: 3001,
    },
    resolve: {
        extensions: ['.json','.js', 'css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'CV',
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.module\.css$/,
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /^((?!\.module).)*css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/i,
                type: 'asset/inline'
            },
        ]
    },
}