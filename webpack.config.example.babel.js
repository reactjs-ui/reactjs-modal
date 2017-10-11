import path from 'path';
import webpack from 'webpack';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import flexbugs from 'postcss-flexbugs-fixes'; // 修复 flexbox 已知的 bug
import autoprefixer from 'autoprefixer';

const ip = '0.0.0.0';
const port = 9090;
const hotDevServer = 'webpack/hot/dev-server';
// https://github.com/webpack/webpack-dev-server
const webpackDevServer = `webpack-dev-server/client?http://${ip}:${port}`;

const appPath = path.resolve(__dirname, 'examples');

const webpackConfig = {
  cache: true,
  devtool: 'source-map', //生成 source map文件
  stats: {
    colors: true,
    reasons: true
  },
  devServer: {
    //指定根目录路径，比如访问 eruda.min.js 时，只需 http://localhost:9090/eruda.min.js 即可
    contentBase: './examples',
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    quiet: false, // 设为true，不把任何信息输出到控制台
    publicPath: '/',
    open: true,
  },

  resolve: {
    //自动扩展文件后缀名
    extensions: ['.js', '.jsx', '.scss']
  },

  // 入口文件 让webpack用哪个文件作为项目的入口
  entry: {
    index: ['./examples/index.js', webpackDevServer, hotDevServer],
    simple: ['./examples/simple.js', webpackDevServer, hotDevServer],
    position: ['./examples/position.js', webpackDevServer, hotDevServer],
    animation: ['./examples/animation.js', webpackDevServer, hotDevServer],
    switching: ['./examples/switching.js', webpackDevServer, hotDevServer],
    popUp: ['./examples/popUp.js', webpackDevServer, hotDevServer],
  },

  // 出口 让webpack把处理完成的文件放在哪里
  output: {
    path: path.resolve(__dirname, 'examples/dist'), //打包输出目录
    filename: '[name].[hash].bundle.js', //文件名称
    publicPath: './' //资源路径
  },

  module: {
    rules: [
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
      },
      {
        test: /\.scss/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            // postcss plugins https://github.com/postcss/postcss/blob/master/docs/plugins.md
            plugins: [
              flexbugs(),
              autoprefixer({
                flexbox: 'no-2009',
                browsers: ['Chrome >= 35', 'Firefox >= 38',
                  'Android >= 4.3', 'iOS >=8', 'Safari >= 8'],
              })
            ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true, // 必须保留
            outputStyle: 'expanded', // 不压缩，设为 compressed 表示压缩
            precision: 15, // 设置小数精度
          }
        }]
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热部署替换模块
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    })
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

export default {
  webpackConfig,
  ip,
  port
};
