import React, {Component} from 'react';
import {render} from 'react-dom';
import Modal from '../js/index';
import '../sass/modal.scss';
import './sass/example.scss';

class ModalAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      animationPosition: null,
      destroyOnClose: false
    };
  }

  onClick = (ap) => {
    return () => {
      if (ap) {
        this.setState({
          visible: true,
          animationPosition: {
            x: 5000,
            y: 5000
          }
        });
      } else {
        this.setState({
          visible: true,
          animationPosition: null
        });
      }
    };
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const {visible, animationPosition} = this.state;
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
    const modal = (
      <Modal
        visible={visible}
        onClose={this.onClose}
        title={'动画效果 Modal 窗口'}
        bodyStyle={{height: '300px'}}
        footer={footer}
        animation
        maskAnimation
        animationPosition={animationPosition}
      >
        <p>可以设置 modal 窗口 动画效果</p>
        <p>传入animationPosition指定其动画原始位置</p>
        <h3>例子代码</h3>
        <pre>
          {
            ` <Modal
    visible={visible}
    onClose={this.onClose}
    title={'动画效果 Modal 窗口'}
    bodyStyle={{height: '300px'}}
    footer={footer}
    animation
    maskAnimation
    animationPosition={animationPosition}
  >
  <p>可以设置 modal 窗口 动画效果</p>
  <p>传入animationPosition指定其动画原始位置</p>
</Modal>`
          }
        </pre>
      </Modal>
    );

    return (
      <div className="example">
        <ol className="example-list">
          <li>
            <button className="example-btn example-btn-default" onClick={this.onClick()}>
              默认动画
            </button>
          </li>

          <li>
            <button className="example-btn example-btn-default"
                    onClick={this.onClick(true)}>
              指定动画起始位置
            </button>
          </li>
        </ol>

        {modal}
      </div>
    );
  }
}

render(
  <ModalAnimation/>, document.getElementById('layout')
);
