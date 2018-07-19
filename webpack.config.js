var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    "cheap-eval-source-map",
    "cheap-module-eval-source-map",
    "cheap-module-source-map",
    "cheap-source-map",
    "eval",
    "eval-source-map",
    "hidden-source-map",
    "inline-source-map",
    "nosources-source-map",
    "source-map"
].map(devtool => ({
    mode: "development",
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
        ]
    },
    devtool,
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })]
}));