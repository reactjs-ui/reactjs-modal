import path from 'path';
import webpack from 'webpack';

const webpackConfig = {
  devtool: 'source-map',
  resolve: {
    //自动扩展文件后缀名
    extensions: ['.js']
  },
  entry: {
    index: ['./js/index.js']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'prop-types': 'prop-types'
  },
  output: {
    path: path.join(__dirname, 'dist'), //打包输出目录
    filename: '[name].js', //文件名称
    publicPath: './', //生成文件基于上下文路径
    library: ['reactModal'],
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      // https://github.com/MoOx/eslint-loader
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: '.eslintrc',
            emitError: true, // 验证失败，终止
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  },

  plugins: [
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    //用来优化生成的代码 chunk,合并相同的代码
    new webpack.optimize.AggressiveMergingPlugin(),
    //用来保证编译过程不出错
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ]
};

module.exports = webpackConfig;
