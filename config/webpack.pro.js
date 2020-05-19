const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');

const baseConfig = require('./webpack.base.js')

const proConfig = {
    mode: 'production',
    output: { // 输出文件
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[chunkhash:8].js'
    },
    devtool: 'none', // 线上推荐不开启
    
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin("style.css"),
        new MiniCssExtractPlugin({ // css 分离成文件
            filename: "[name]_[contenthash:8].css"
        }),
    ],

    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: false,
            }
          })
        ]
    }
}

module.exports = merge(baseConfig, proConfig)



// OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
// UglifyJsPlugin：压缩JS代码；
// ExtractTextPlugin：分离CSS和JS文件