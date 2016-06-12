import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import Modal from '../src/script/index';

class ModalSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.onClose = this.onClose.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    this.setState({
      visible: true
    });
  }

  onClose(e) {
    this.setState({
      visible: false
    });
  }

  render() {
    let modal;
    //if (this.state.visible) {
    modal = (
      <Modal
        visible={this.state.visible}
        onClose={this.onClose}
        title={'标题'}
      >
        <p>这是一个简单的 Modal</p>
        <p>基于 React 实现，参考 bootstrap</p>
      </Modal>
    );
    //}
    return (
      <div style={{ width: '90%', margin: '0 auto' }}>
        <button onClick={this.onClick}>
          打开 modal 窗口
        </button>
        {modal}
      </div>
    );
  }
}

render(
  <ModalSimple />, document.getElementById('layout')
);
