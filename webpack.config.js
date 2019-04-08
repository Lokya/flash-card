var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      './src/index.tsx'
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      port: 8990, //设置监听端口
      historyApiFallback: true,
      contentBase: './dist',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
          'components': path.resolve(__dirname, './src/components'),
        }
    },
    module: {
      rules: [
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico|ttf|eot|svg|woff|woff2)/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/[name].[hash:8].[ext]',
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.ejs' }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
}
