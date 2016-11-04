import React, {Component, PropTypes} from 'react';
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
