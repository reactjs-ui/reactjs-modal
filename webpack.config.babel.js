import path from 'path';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const appPath = path.resolve(__dirname, 'src');

let webpackConfig = {
  // eslint 配置
  eslint: {
    emitError: true, // 验证失败，终止
    configFile: '.eslintrc'
  },
  postcss () {
    return {
      defaults: [precss, autoprefixer],
      cleaner: [autoprefixer({
        flexbox: 'no-2009',
        browsers: ['last 2 version', 'chrome >=30', 'Android >= 4.3']
      })]
    };
  },
  resolve: {
    root: [appPath], // 设置要加载模块根路径，该路径必须是绝对路径
    //自动扩展文件后缀名
    extensions: ['', '.js', '.jsx', '.scss']
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
    // https://github.com/MoOx/eslint-loader
    preLoaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules.*/,
      loader: 'eslint'
    }],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    // http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
    // 相当于命令参数 --optimize-dedupe 消除冗余的或重复的代码
    new webpack.optimize.DedupePlugin(),
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    //用来优化生成的代码 chunk,合并相同的代码
    new webpack.optimize.AggressiveMergingPlugin(),
    //用来保证编译过程不出错
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = webpackConfig;
