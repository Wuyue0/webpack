const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: "../dist",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}


module.exports = merge(baseConfig,devConfig)