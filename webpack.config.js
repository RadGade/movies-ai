var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        filename: "scripts/bundle.js",
        path: __dirname + '/dist/scripts'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
