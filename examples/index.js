import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import './sass/example.scss';

const Index = () => {
  return (
    <div className="example">
      <h3>React Modal 例子</h3>
      <ol className="example-list">
        <li>
          <a href="./simple.html" target="_blank">基本用法</a>
        </li>
        <li>
          <a href="./position.html" target="_blank">改变展示位置</a>
        </li>

        <li>
          <a href="./animation.html" target="_blank">动画效果</a>
        </li>

        <li>
          <a href="./switching.html" target="_blank">模态窗口间切换</a>
        </li>

        <li>
          <a href="./popUp.html" target="_blank">模态中打开子模态窗口</a>
        </li>

      </ol>
    </div>
  );
};

render(<Index/>, document.getElementById('layout'));
