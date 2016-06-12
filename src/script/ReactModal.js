import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {checkBodyScrollbar, getScrollbarWidth} from './utils';
import '../sass/modal.scss';

let scrollingEffect = false;

/**!
 * Modal React Component
 * reactjs-modal: https://github.com/reactjs-ui/reactjs-modal
 *
 */
class ReactModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible
    };
    this.scrollbarWidth = getScrollbarWidth();
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount() {
    this.instanceModal();
    this.toggleModal({});
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
    this.toggleModal(prevProps);
  }

  componentWillUnmount() {
    this.destoryModal();
  }

  destoryModal() {
    if (this.modalContainer) {
      ReactDOM.unmountComponentAtNode(this.modalContainer);
      document.body.removeChild(this.modalContainer);
      this.modalContainer = null;
    }
  }

  toggleModal(prevProps) {
    const {visible} = this.props;
    if (visible) {
      if (!prevProps.visible) {
        this.addScrollingEffect();
      }
    } else {
      this.removeScrollingEffect();
    }
  }

  addScrollingEffect() {
    if (scrollingEffect) {
      return;
    }

    scrollingEffect = true;
    const {prefixCls} = this.props;
    this.setScrollbar();
    let className = document.body.className;
    const scrollingClassName = `${prefixCls}-open`;
    if (className.indexOf(scrollingClassName) === -1) {
      document.body.className += ` ${scrollingClassName}`;
    }
  }

  removeScrollingEffect() {
    if (scrollingEffect === false) {
      return;
    }
    scrollingEffect = false;

    const {prefixCls} = this.props;
    let className = document.body.className;
    const scrollingClassName = `${prefixCls}-open`;
    if (className.indexOf(scrollingClassName) !== -1) {
      document.body.className = className.replace(scrollingClassName, '');
    }
    this.resetScrollbar();
  }

  setScrollbar() {
    this.bodyIsOverflowing = checkBodyScrollbar();
    if (this.bodyIsOverflowing) {
      document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    }
  }

  resetScrollbar() {
    document.body.style.paddingRight = '';
  }

  onClose() {
    this.props.onClose();
  }

  //实例化 Modal，如果开始传入的 visible 为 false，则不实例化
  instanceModal() {
    if (this.rendered && !this.modal) {
      /**
       * ReactDOM.unstable_renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
       * parentComponent--父组件  nextElement--下一个组件  container--要绑定的dom
       */
      this.modal = ReactDOM.unstable_renderSubtreeIntoContainer(this,
        this.renderModal(), this.renderModalContainer());
    }
  }

  renderMask() {
    const {mask, prefixCls} = this.props;
    if (mask) {
      return (
        <div className={`${prefixCls}-mask`}></div>
      );
    }

    return null;
  }

  renderModalContent() {
    const {
      closable, prefixCls, title, footer, style,
      className, children
    } = this.props;

    let closeEl;
    if (closable) {
      closeEl = (<button
        onClick={this.onClose}
        className={`${prefixCls}-close`}
      >
        <span className={`${prefixCls}-close-x`}/>
      </button>);
    }

    let headerEl;
    if (title) {
      headerEl = (<div className={`${prefixCls}-header`}>
        {closeEl}
        <div className={`${prefixCls}-title`}>
          {title}
        </div>
      </div>);
    }

    let footerEl;
    if (footer) {
      footerEl = (<div className={`${prefixCls}-footer`}>
        {footer}
      </div>);
    }


    const _style = {
      ...style
    };

    const modalElement = (
      <div
        style={_style}
        className={`${prefixCls} ${className || ''}`}
      >
        <div className={`${prefixCls}-dialog`}>
          <div className={`${prefixCls}-content`}>
            {headerEl}
            <div className={`${prefixCls}-body`}>
              {children}
            </div>
            {footerEl}
          </div>
        </div>
      </div>
    );

    return modalElement;
  }

  //渲染窗口容器
  renderModalContainer() {
    const {container} = this.props;
    const modalContainer = document.createElement('div');
    if (container) {
      container.appendChild(modalContainer);
    } else {
      document.body.appendChild(modalContainer);
    }
    this.modalContainer = modalContainer;
    return modalContainer;
  }

  //渲染 Modal 窗口
  renderModal() {
    const props = this.props;
    let modalProps = {
      ...props,
      onClose: this.onClose,
      visible: this.state.visible
    };

    let {visible, style} = this.props;
    style = {...style};
    if (visible) {
      style.display = null;
    }
    return (<div>
      {this.renderMask()}
      <div
        tabIndex="-1"
        style={style}
      >
        {this.renderModalContent()}
      </div>
    </div>);
  }

  render() {
    // 是否渲染 modal，以下写法表示只渲染一次
    this.rendered = this.rendered || this.state.visible;
    return null;
  }
}

ReactModal.defaultProps = {
  prefixCls: 'rc-modal',
  className: '',
  mask: true,
  closable: true,
  onClose: () => {
  },
  keyboard: true
};

ReactModal.propTypes = {
  prefixCls: PropTypes.string, // Modal 窗口 class，默认为 rc-modal
  className: PropTypes.string, //自定义 class 样式
  style: PropTypes.object, //	自定义 style 比如 width 或 height
  zIndex: PropTypes.number, //如果不设置则取调起 modal 窗口 dom 的 zIndex + 1
  visible: PropTypes.bool, // Modal 窗口是否可见
  closable: PropTypes.bool, // 是否显示关闭按钮
  onClose: PropTypes.func, // 关闭回调函数
  keyboard: PropTypes.bool, // 按 esc 是否关闭窗口
  mask: PropTypes.bool, // 是否显示遮罩效果
  maskClosable: PropTypes.bool, //设为 true，当点击遮罩时，关闭窗口
  destroy: PropTypes.bool, // 关闭窗口时，是否销毁
  position: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]), //模态窗口显示位置，当设为字符串时，支持 top left right bottom center， 设置对象表示其坐标 {x:number,y:number}
  animation: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]), // 是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定的动画样式
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]), //标题
  footer: PropTypes.element, // 底部按钮设置
  children: PropTypes.node, // 窗体内容
  container: PropTypes.element
};

export default ReactModal;
