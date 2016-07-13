import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import Modal from '../src/scripts/index';
import '../src/sass/modal.scss';
import './sass/example.scss';

class ModalPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      animation: false,
      maskAnimation: false,
      hideAllModal: false
    };
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      animation: !this.state.animation,
      maskAnimation: !this.state.maskAnimation
    });
  }

  onClick(e, index) {
    this.setState({
      [`visible${index}`]: true
    });
  }

  onClose(index) {
    const {animation} = this.state;

    if (index === 2) {
      this.setState({
        visible2: false,
        hideAllModal: false
      });
    } else {
      this.setState({
        visible2: false,
        visible1: false,
        hideAllModal: true
      });
    }
  }

  renderModal1() {
    const {visible1, animation, maskAnimation} = this.state;

    return (
      <Modal
        visible={visible1}
        onClose={this.onClose}
        title="父模态窗口"
        style={{width: '500px'}}
        bodyStyle={{height: '300px'}}
        footer={(
          <div>
          <button className="example-btn example-btn-primary"  onClick={(e) => {this.onClick(e, 2)}}>
            打开子窗口
          </button>
        </div>
        )}
        animation={animation}
        maskAnimation={maskAnimation}
      >
        <p>父模态窗口</p>
        <p>点击打开子窗口按钮，弹出子窗口</p>
      </Modal>
    );
  }

  renderModal2() {
    const {visible2, animation, maskAnimation, hideAllModal} = this.state;

    return (
      <Modal
        visible={visible2}
        onClose={() => {this.onClose(2)}}
        title="子模态窗口"
        style={{width: '400px'}}
        bodyStyle={{height: '200px'}}
        footer={(
          <div>
          <button className="example-btn example-btn-primary" onClick={() => {this.onClose(2)}}>
            关闭子窗口
          </button>
          <button className="example-btn example-btn-primary" onClick={this.onClose}>
            关闭父窗口
          </button>
        </div>
        )}
        animation={animation}
        maskAnimation={maskAnimation}
        hideAllModal={hideAllModal}
      >
        <p>子模态窗口</p>
        <p>点击关闭子窗口按钮，子窗口关闭</p>
        <p>点击关闭父窗口按钮，父窗口和子窗口同时关闭</p>
      </Modal>
    );
  }

  render() {
    const {animation} = this.state;

    return (
      <div className="example">
        <h3>模态中打开子模态窗口</h3>
        <p>开启动画
          <input type="checkbox" checked={animation}
                 onChange={this.handleChange}/></p>
        <ol className="example-list">
          <li>
            <button className="example-btn example-btn-default" onClick={(e) => {this.onClick(e, 1)}}>
              打开父模态窗口
            </button>
          </li>
        </ol>
        {this.renderModal1()}
        {this.renderModal2()}
      </div>
    );
  }
}

render(
  <ModalPopUp />, document.getElementById('layout')
);
