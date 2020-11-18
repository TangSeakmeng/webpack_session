const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    // entry: ['./src/index.js', './src/app.js'],
    // entry: () => ['./src/index.js', './src/app.js'],
    // entry: () => fs.readdirSync("./src/").map((e) => './src/' + e),

    // output: {
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist'),
    // }

    // externals:{
    //     jquery: 'jQuery',
    //     lodash: 'lodash'
    // },

    // mode: 'production',
    mode: 'development',

    entry: {
        main: ['./src/index.js', './src/app.js'],
        about: './src/about.js'
    },

    module: {
        rules:[
            {
                test:/\.txt$/i,
                use: [
                    {
                        loader:'raw-loader',
                        options:{
                            esModule:false,
                        },
                    }
                ], 
            },
            {
                test:/\.css$/i,
                use:[
                    {
                        loader:'style-loader',
                        options:{
                            injectType:'linkTag'
                        }
                    },
                    {
                        loader:'file-loader',
                        options:{
                            name:'[contenthash].[ext]'
                        }
                    },
                ],
            },
        ]
    },

    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
    },

    plugins:[
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets:false
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
};
