import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import ReactModal from './ReactModal';
import '../sass/modal.scss';

/**!
 * Modal React Component
 * reactjs-modal: https://github.com/reactjs-ui/reactjs-modal
 *
 */
class ReactModalWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
  }

  componentDidMount() {
    this.instanceModal();
  }

  componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({
        visible: nextProps.visible
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return Boolean(this.state.visible || nextState.visible);
  }

  componentDidUpdate(prevProps) {
    this.instanceModal();
  }

  componentWillUnmount() {
    this.destoryModal();
  }

  // 销毁 Modal
  destoryModal() {
    if (this.modalContainer) {
      ReactDOM.unmountComponentAtNode(this.modalContainer);
      document.body.removeChild(this.modalContainer);
      this.modalContainer = null;
    }
  }

  //实例化 Modal，如果开始传入的 visible 为 false，则不实例化
  instanceModal() {
    if (this.rendered) {
      /**
       * ReactDOM.unstable_renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
       * parentComponent--父组件  nextElement--下一个组件  container--要绑定的dom
       */
      this.modal = ReactDOM.unstable_renderSubtreeIntoContainer(this,
        this.renderModal(), this.renderModalContainer());
    }
  }

  //渲染窗口容器
  renderModalContainer() {
    if (!this.modalContainer) {
      const {container} = this.props;
      this.modalContainer = document.createElement('div');
      if (container) {
        container.appendChild(this.modalContainer);
      } else {
        document.body.appendChild(this.modalContainer);
      }
    }
    return this.modalContainer;
  }

  //渲染 Modal 窗口
  renderModal() {
    const props = this.props;
    let modalProps = {
      ...props,
      visible: this.state.visible
    };
    //设置 key 不会重复创建
    return (<ReactModal {...modalProps} key="modal">
      {props.children}
    </ReactModal>);
  }

  render() {
    // 是否渲染 modal，以下写法表示只渲染一次
    this.rendered = this.rendered || this.state.visible;
    return null;
  }
}

ReactModalWrap.propTypes = {
  visible: PropTypes.bool, // Modal 窗口是否可见
  children: PropTypes.node,
  container: PropTypes.element
};

export default ReactModalWrap;
