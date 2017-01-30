var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var bundleOutputDir = './wwwroot/dist';
module.exports = {
    devtool: isDevBuild ? 'inline-source-map' : null,
    entry: { 'main': './ClientApp/index.tsx' },
    resolve: { extensions: [ '', '.js', '.jsx', '.ts', '.tsx' ] },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            { test: /\.s(c|a)ss$/, include: /ClientApp/, loader: 'sass-loader'},
            { test: /\.ts(x?)$/, include: /ClientApp/, loader: 'babel-loader' },
            { test: /\.tsx?$/, include: /ClientApp/, loader: 'ts-loader', query: { silent: true } },
            {
                test: /\.css$/, loader: isDevBuild ? 'style-loader!css-loader' :
                    ExtractTextPlugin.extract(['css-loader'])
            },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader', query: { limit: 25000 } },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./wwwroot/dist/vendor-manifest.json')
        })
    ].concat(isDevBuild ? [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')
        })
    ] : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new ExtractTextPlugin('site.css')
    ])
};
