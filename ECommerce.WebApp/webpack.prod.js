"use strict";

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


console.log('@@@@@@@@@ USING PRODUCTION @@@@@@@@@@@@@@@');

module.exports = Merge(CommonConfig, {
    mode: "production",
    output: {
        filename: "[name].[chunkhash].js",
        chunkFilename: "[name].[chunkhash].bundle.js"
    },
    module: {

    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.[chunkhash].css',
            chunkFilename: 'main.[chunkhash].bundle.css'
        })
    ]
});