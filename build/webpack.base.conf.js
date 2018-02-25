var path = require('path')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        'myDocJsxPluginTemplate': ['./src/index.js'],
    },
    externals: {
        'my-doc-jsx': {
            commonjs: 'my-doc-jsx',
            commonjs2: 'my-doc-jsx',
            root: 'myDocJsx'
        },
    },
    output: {
        path: path.join(__dirname, "../dist"),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        filename: '[name].js',
        library: '[name]'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.join(__dirname, '../src'),
        }, {
            test: /\.ts(x?)$/,
            include: path.join(__dirname, '../src'),
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'ts-loader',
            }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader"]
            })
        }]
    },
    plugins:[
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                postcss: [ require('autoprefixer')({
                    browsers: ['last 2 versions']
                })],
            }
        }),
        new ExtractTextPlugin('[name].css'),
    ]
}