const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports ={
     mode: 'production',
     entry: './src/index.js',
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'main.js'
     },
     module: {
        rules: [
                {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                },
                {
                        test: /\.css$/,
                        use: [
                                MiniCSSExtractPlugin.loader,
                                'css-loader'
                        ]
                }
        ]
     },
     plugins: [
        new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html'
        }),
        new MiniCSSExtractPlugin()
     ],
     devServer: {  //запуск на  http://localhost:8100/
        port: 8100,
     },
}