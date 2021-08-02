const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash:8].[name][ext]'
  },
  module: {
    rules: [
      // 处理js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      // 处理css
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // 处理图片
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset',
        generator: {
          // ext前面自带.
          filename: 'images/[hash:8].[name][ext]'
        }
      },
      // 处理字体
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash:8].[name][ext]'
        }
      },
      // 处理html文件，主要是解决图片的问题
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {},
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack 手脚架测试',
      template: './src/index.html'
    })
  ],
}