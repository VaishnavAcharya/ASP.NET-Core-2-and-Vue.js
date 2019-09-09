const path = require('path');
const webpack = require('webpack');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const bundleOutputDir = './wwwroot/dist';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    stats: { modules: false },
    context: __dirname,
    resolve: { extensions: ['.js', '.ts'] },
    entry: { 'main': './ClientApp/boot.ts' },
    module: {
        rules: [
            { test: /\.vue$/, include: /ClientApp/, loader: 'vue-loader' },
            { test: /\.tsx?$/, include: /ClientApp/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
            { test: /\.css$/, use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
        ]
    },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        publicPath: 'dist/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CheckerPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
        //new webpack.DllReferencePlugin({
        //    context: __dirname,
        //    manifest: require('./wwwroot/dist/vendor-manifest.json')
        //})
    ]
};
