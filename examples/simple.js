import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import Modal from '../src/scripts/index';
import './sass/example.scss';

class ModalSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title: null,
      footer: null
    };
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e, no) {
    const state = {visible: true};
    if (!no) {
      state.title = '基本 Modal 窗口';
      state.footer = (
        <div>
          <button className="example-btn example-btn-primary" onClick={this.onClose}>
            确认
          </button>
          <button className="example-btn example-btn-default" onClick={this.onClose}>
            取消
          </button>
        </div>
      );
    } else {
      state.title = null;
      state.footer = null;
    }
    this.setState(state);
  }

  onClose(e) {
    this.setState({
      visible: false
    });
  }

  render() {
    const {visible, title, footer} = this.state;
    let modal;
    if (visible) {
      modal = (
        <Modal
          visible={visible}
          onClose={this.onClose}
          title={title}
          style={{width: '700px'}}
          bodyStyle={{height: '400px'}}
          footer={footer}
        >
          <p>这是一个简单的 Modal</p>
          <p>基于 React 实现，参考 bootstrap</p>
          <p>按 esc 键关闭 Modal 窗口</p>
          <h3>例子代码</h3>
          <pre>
            {
              ` <Modal
    visible={visible}
    onClose={this.onClose}
    title={'基本 Modal 窗口'}
    style={{width: '700px'}}
    bodyStyle={{height: '500px'}}
    footer={footer}
  >
  <p>这是一个简单的 Modal</p>
  <p>基于 React 实现，参考 bootstrap</p>
</Modal>`
            }
          </pre>
        </Modal>
      );
    }
    return (
      <div className="example">
        <ol className="example-list">
          <li>
            <button className="example-btn example-btn-default" onClick={(e) => {this.onClick()}}>
              基本 Modal 窗口
            </button>
          </li>

          <li>
            <button className="example-btn example-btn-default" onClick={(e) => {this.onClick(e, true)}}>
              无 header 、无 footer  Modal 窗口
            </button>
          </li>
        </ol>

        {modal}
      </div>
    );
  }
}

render(
  <ModalSimple />, document.getElementById('layout')
);
