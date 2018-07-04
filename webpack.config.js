var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './client/main.js'
    ],
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /public/],
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.scss', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './build',
        hot: true
    }
};