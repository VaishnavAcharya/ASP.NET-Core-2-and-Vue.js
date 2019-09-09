"use strict";

const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

const bundleOutputDir = './wwwroot/dist';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('@@@@@@@@@ USING DEVELOPMENT @@@@@@@@@@@@@@@');

module.exports = Merge(CommonConfig, {
    mode: "development",
    output: {
        filename: "[name].js",
        chunkFilename: "[name].bundle.js"
    },
    module: {

    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map', // Remove this line if you prefer inline source maps
            moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: 'main.bundle.css'
        })
    ]
});