import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import Modal from '../src/scripts/index';
import '../src/sass/modal.scss';
import './sass/example.scss';

class ModalSwitching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible1: false,
      visible2: false,
      animation: false,
      maskAnimation: false
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

    if (index === 1) {
      this.setState({
        visible1: false,
      }, () => {
        if (animation) {
          setTimeout(() => {
            this.setState({
              visible2: true
            });
          }, 300);
        } else {
          this.setState({
            visible2: true
          });
        }
      });
    } else if (index === 2) {
      this.setState({
        visible2: false,
      }, () => {
        if (animation) {
          setTimeout(() => {
            this.setState({
              visible1: true
            });
          }, 300);
        } else {
          this.setState({
            visible1: true
          });
        }
      });
    } else {
      this.setState({
        visible2: false,
        visible1: false
      });
    }
  }

  renderModal1() {
    const {visible1, animation, maskAnimation} = this.state;

    return (
      <Modal
        visible={visible1}
        onClose={this.onClose}
        title="模态窗口1"
        style={{width: '500px'}}
        bodyStyle={{height: '200px'}}
        footer={(
          <div>
          <button className="example-btn example-btn-primary"  onClick={() => {this.onClose(1)}}>
            切换
          </button>
        </div>
        )}
        animation={animation}
        maskAnimation={maskAnimation}
      >
        <p>模态窗口1</p>
        <p>点击切换按钮，切换到模态窗口2</p>
      </Modal>
    );
  }

  renderModal2() {
    const {visible2, animation, maskAnimation} = this.state;

    return (
      <Modal
        visible={visible2}
        onClose={this.onClose}
        title="模态窗口2"
        style={{width: '600px'}}
        bodyStyle={{height: '300px'}}
        footer={(
          <div>
          <button className="example-btn example-btn-primary" onClick={() => {this.onClose(2)}}>
            切换
          </button>
        </div>
        )}
        animation={animation}
        maskAnimation={maskAnimation}
      >
        <p>模态窗口2</p>
        <p>点击切换按钮，切换到模态窗口1</p>
      </Modal>
    );
  }

  render() {
    const {animation} = this.state;

    return (
      <div className="example">
        <h3>模态窗口间切换，如果开启动画，需要等待上一个窗口动画执行完，再显示下一个窗口，延迟时间去动画持续时间</h3>
        <p>开启动画
          <input type="checkbox" checked={animation}
                 onChange={this.handleChange}/></p>
        <ol className="example-list">
          <li>
            <button className="example-btn example-btn-default" onClick={(e) => {this.onClick(e, 1)}}>
              打开模态窗口1
            </button>
          </li>

          <li>
            <button className="example-btn example-btn-default" onClick={(e) => {this.onClick(e, 2)}}>
              打开模态窗口2
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
  <ModalSwitching />, document.getElementById('layout')
);
