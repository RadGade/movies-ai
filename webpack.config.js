var webpack = require('webpack');
var path    = require('path');

module.exports = {
    devtool: 'source-map',

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'src/app.js')
    ],

    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000,
        hot: true
    },

    output: {
        filename: "scripts/bundle.js",
        path: path.join(__dirname, '/dist/'),
        publicPath: '/'
    },

    module: {

        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
