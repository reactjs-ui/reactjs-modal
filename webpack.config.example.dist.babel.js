import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import flexbugs from 'postcss-flexbugs-fixes'; // 修复 flexbox 已知的 bug
import autoprefixer from 'autoprefixer';

const appPath = path.resolve(__dirname, 'examples');

// multiple extract instances
const extractScss = new ExtractTextPlugin({
  filename: 'css/[name].[chunkhash].css',
  disable: false,
  allChunks: true
});

const webpackConfig = {
  devtool: 'source-map', //生成 source map文件
  resolve: {
    //自动扩展文件后缀名
    extensions: ['.js', '.jsx', '.scss']
  },

  // 入口文件 让webpack用哪个文件作为项目的入口
  entry: {
    index: ['./examples/index.js'],
    simple: ['./examples/simple.js'],
    position: ['./examples/position.js'],
    animation: ['./examples/animation.js'],
    switching: ['./examples/switching.js'],
    popUp: ['./examples/popUp.js'],
  },

  // 出口 让webpack把处理完成的文件放在哪里
  output: {
    path: path.resolve(__dirname, 'examples-dist'), //打包输出目录
    filename: '[name].[hash].bundle.js', //文件名称
    publicPath: './' //资源路径
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss/,
        use: extractScss.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                flexbugs(),
                autoprefixer({
                  flexbox: 'no-2009',
                  browsers: ['Chrome >= 35', 'Firefox >= 38',
                    'Android >= 4.3', 'iOS >=8', 'Safari >= 8']
                })
              ]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true, // 必须保留
              outputStyle: 'compressed', // 压缩
              precision: 15, // 设置小数精度
            }
          }],
          publicPath: '/dist'
        }),
      },
    ],
  },

  plugins: [
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    //用来优化生成的代码 chunk,合并相同的代码
    new webpack.optimize.AggressiveMergingPlugin(),
    //用来保证编译过程不出错
    new webpack.NoEmitOnErrorsPlugin(),
    extractScss,
    //http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    // 相当于命令参数 --optimize-minimize
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      },
      mangle: {
        except: [] // 设置不混淆变量名
      }
    }),
  ]
};

//创建 HtmlWebpackPlugin 的实例
// https://www.npmjs.com/package/html-webpack-plugin
const {entry} = webpackConfig;

// 为 HtmlwebpackPlugin 设置配置项，与 entry 键对应，根据需要设置其参数值
const htmlwebpackPluginConfig = {
  index: {
    title: 'React Modal 例子列表'
  },
  simple: {
    title: '基本用法'
  },
  position: {
    title: '改变展示位置'
  },
  animation: {
    title: '动画效果'
  },
  switching: {
    title: '模态窗口间切换'
  },
  popUp: {
    title: '模态中打开子模态窗口'
  }
};

for (const key in entry) {
  if (entry.hasOwnProperty(key) && key !== 'vendors') {
    webpackConfig.plugins.push(
      new HtmlwebpackPlugin({
        title: htmlwebpackPluginConfig[key].title,
        template: path.resolve(appPath, 'templates/layout.html'),
        filename: `${key}.html`,
        //chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: [key, 'vendors'],
        //要把script插入到标签里
        inject: 'body'
      })
    );
  }
}

export default webpackConfig;
