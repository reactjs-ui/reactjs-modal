import path from 'path';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const appPath = path.resolve(__dirname, 'src');

const webpackConfig = {
  resolve: {
    //自动扩展文件后缀名
    extensions: ['.js', '.jsx', '.scss']
  },
  entry: {
    index: ['./src/scripts/index.js']
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-addons-css-transition-group': 'react-addons-css-transition-group'
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
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    //用来优化生成的代码 chunk,合并相同的代码
    new webpack.optimize.AggressiveMergingPlugin(),
    //用来保证编译过程不出错
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        // eslint 配置
        eslint: {
          emitError: true, // 验证失败，终止
          configFile: '.eslintrc'
        },
        postcss () {
          return {
            defaults: [precss, autoprefixer],
            cleaner: [autoprefixer({
              browsers: ['Chrome >= 35', 'Firefox >= 38', 'Edge >= 12',
                'Explorer >= 8', 'Android >= 4.3', 'iOS >=8', 'Safari >= 8']
            })]
          };
        },
      }
    })
  ]
};

module.exports = webpackConfig;
