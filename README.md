# reactjs-modal

This is a react component for modal.

## Install

```
npm install reactjs-modal --save
```

## Usage

```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ControllableCustomRadio extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.array
  };
  
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    };
  }

  handleChange = (event) => {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const value = this.props.value || this.state.value;
    const children = React.Children.map(this.props.children, (child, i) => {
      return (
        <label style={{marginRight: '10px'}} key={i}>
          <input type="radio" name={this.props.name} value={child.props.value} checked={child.props.value === value}
                 onChange={this.handleChange}/>
          {child.props.children}
        </label>
      );
    });

    return (
      <div>{children}</div>
    );
  }
}

export default ControllableCustomRadio;


import React, {Component} from 'react';
import {render} from 'react-dom';
import Modal from '../src/scripts/index';
import ControllableCustomRadio from './ControllableCustomRadio';
import '../src/sass/modal.scss';
import './sass/example.scss';

class ModalPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      position: 'center'
    };
  }

  onClick = (e) => {
    this.setState({
      visible: true
    });
  };

  onClose = (e) => {
    this.setState({
      visible: false
    });
  };

  handleChange = (event) => {
    this.setState({
      position: event.target.value
    });
  };

  render() {
    let modal;
    const {visible} = this.state;
    let {position} = this.state;
    if (visible) {
      const footer = (
        <div>
          <button className="example-btn example-btn-primary" onClick={this.onClose}>
            确认
          </button>
          <button className="example-btn example-btn-default" onClick={this.onClose}>
            取消
          </button>
        </div>
      );

      if (position === 'xy') {
        position = {right: '10px', top: '20px'};
      }
      modal = (
        <Modal
          visible={visible}
          onClose={this.onClose}
          title={`Modal 窗口位置 ${position ? (typeof position === 'object' ? 'right: \'10px\', top: \'20px\'' : position) : ''}`}
          style={{width: '700px'}}
          footer={footer}
          position={position}
        >
          <p>可以改变 Modal 窗口展示位置</p>
          <p>支持 top bottom left right center left-top left-bottom right-top right-bottom 自定义坐标</p>
          <h3>例子代码</h3>
          <pre>
            {
              ` <Modal
  visible={visible}
  onClose={this.onClose}
  title="Modal窗口位置"
  style={{width: '700px'}}
  footer={footer}
  position={position}
>
  <p>可以改变 Modal 窗口展示位置</p>
  <p>支持 top bottom left right center
  left-top left-bottom right-top right-bottom
  自定义坐标</p>
</Modal>`
            }
          </pre>
        </Modal>
      );
    }
    return (
      <div className="example">
        <p>位置：</p>
        <ControllableCustomRadio name="position" value={this.state.position} onChange={this.handleChange}>
          <option value="left">左</option>
          <option value="right">右</option>
          <option value="top">上</option>
          <option value="bottom">下</option>
          <option value="center">居中</option>
          <option value="left-top">左上</option>
          <option value="left-bottom">左下</option>
          <option value="right-top">右上</option>
          <option value="right-bottom">右下</option>
          <option value="xy">自定义坐标位置</option>
        </ControllableCustomRadio>

        <p>
          <button className="example-btn example-btn-default" onClick={this.onClick}>
            打开 Modal 窗口
          </button>
        </p>
        {modal}
      </div>
    );
  }
}

render(
  <ModalPosition />, document.getElementById('layout')
);

```


## Options

| 选项        | 类型   |  功能  |
| --------   | ----- | ---- |
| prefixCls | PropTypes.string| Modal 窗口 class，默认为 rc-modal|
| className | PropTypes.string|自定义 class 样式 |
| style | PropTypes.object|	自定义 style 比如 width 或 height |
| bodyStyle | PropTypes.object|	自定义 modal body 的样式，比如 width height 滚动条等 |
| footerStyle | PropTypes.object|	自定义 modal footer 的样式，比如 width height 滚动条等 |
| zIndex | PropTypes.number| 模态窗口 zIndex |
| visible | PropTypes.bool| Modal 窗口是否可见 |
| closable | PropTypes.bool| 是否显示关闭按钮 |
| onClose | PropTypes.func| 关闭窗口时回调函数 |
| keyboard | PropTypes.bool| 按 esc 是否关闭窗口 |
| mask | PropTypes.bool| 是否显示遮罩效果 |
| maskClosable| PropTypes.bool|设为 true，当点击遮罩时，关闭窗口 |
| position| PropTypes.oneOfType([PropTypes.string, PropTypes.object]) | 模态窗口显示位置，当设为字符串时，支持 top left right bottom center left-top left-bottom right-top right-bottom， 设置对象表示其坐标 {x: number,y:number} |
| animationPosition| PropTypes.object|基于指定位置渲染动画，格式为： { x: 10, y: 20} |
| animation| PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) | 窗体是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定义的动画样式|
| maskAnimation| PropTypes.oneOfType([PropTypes.bool, PropTypes.string]) | mask是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定义的动画样式 |
| transitionAppearTimeout | PropTypes.number|动画出现持续时间 |
| transitionEnterTimeout | PropTypes.number|动画进入持续时间 |
| transitionLeaveTimeout | PropTypes.number|动画离开持续时间 |
| title | PropTypes.oneOfType([PropTypes.string, PropTypes.element])|模态窗口标题 |
| footer | PropTypes.element| 底部按钮设置 |
| children | PropTypes.node| 窗体内容 |
| container | PropTypes.element | 渲染模态窗口容器，默认为 document.body |
| preventTouchmove| PropTypes.bool | 当显示模态窗口时，是否阻止 touchmove 事件 |
| hideAllModal| PropTypes.bool | 当打开多个模态窗口时，根据该属性来控制是否关闭所有模态窗口 |
| hideHeader| PropTypes.bool | 控制是否显示 header |
| headerStyle| PropTypes.bool | 自定义 modal header 的样式 |
 

## Example

```
npm install
npm start
```

http://localhost:9090

## Online Example

http://reactjs-ui.github.io/reactjs-modal/

## Build Example
第一次需要先执行前两步操作，再执行第三步。以后修改例子后，只需要执行第三步即可

1. 创建 gh-pages 分支，**在执行 git subtree add 命令之前，需确保 gh-pages 分支下至少存在一个文件**
```
git checkout -b gh-pages
rm -rf *     //隐藏文件需要单独删除，结合命令 ls -a
vim .gitignore //输入一些内容
git add .
git commit -m "init branch gh-pages"
git push --set-upstream origin gh-pages
git checkout master
```

2. 把分支 gh-pages 添加到本地 subtree 中，执行该命令前，请确保 examples-dist 文件夹不存在

```
git subtree add --prefix=examples-dist origin gh-pages --squash
```
  
3. 生成在线 examples

```
npm run build:examples
git add examples-dist
git commit -m "Update online examples"
git subtree pull --prefix=examples-dist origin gh-pages
git subtree push --prefix=examples-dist origin gh-pages --squash
git push
```

4 使用以下命令一键发布在线例子
```bash
npm run examples:publish
```

## Build

```
npm run build
```

## Publish

```
npm run build:publish
```

## Issue

https://github.com/reactjs-ui/reactjs-modal/issues

## Change Log

Please view [here](CHANGELOG.md)
