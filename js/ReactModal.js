import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import scrollbarWidth from 'perfect-dom/lib/scrollbarWidth';
import checkBodyScrollbar from 'perfect-dom/lib/checkBodyScrollbar';
import offset from 'perfect-dom/lib/offset';

let scrollingEffect = false;
const positionKey = ['left', 'right', 'top', 'bottom'];

function setTransformOrigin(node, value) {
  const {style} = node;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach((prefix) => {
    if (style[`${prefix}TransformOrigin`] !== undefined) {
      style[`${prefix}TransformOrigin`] = value;
    }
  });
  style.transformOrigin = value;
}

/**!
 * Modal React Component
 * reactjs-modal: https://github.com/reactjs-ui/reactjs-modal
 *
 */
class ReactModal extends Component {
  static propTypes = {
    prefixCls: PropTypes.string, // Modal 窗口 class，默认为 rc-modal
    className: PropTypes.string, //自定义 class 样式
    style: PropTypes.object, // 自定义 style 比如 width 或 height
    headerStyle: PropTypes.object, // 自定义 modal header 的样式
    bodyStyle: PropTypes.object, // 自定义 modal body 的样式，比如 width height 滚动条等
    footerStyle: PropTypes.object, // 自定义 modal footer 的样式，比如 width height 滚动条等
    zIndex: PropTypes.number, // 模态窗口 zIndex
    visible: PropTypes.bool, // Modal 窗口是否可见
    closable: PropTypes.bool, // 是否显示关闭按钮
    onClose: PropTypes.func, // 关闭回调函数
    keyboard: PropTypes.bool, // 按 esc 是否关闭窗口
    mask: PropTypes.bool, // 是否显示遮罩效果
    maskClosable: PropTypes.bool, //设为 true，当点击遮罩时，关闭窗口
    // 模态窗口显示位置，当设为字符串时，支持 top left right bottom center
    // left-top left-bottom right-top right-bottom， 设置对象表示其坐标 {x:number,y:number}
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    animationPosition: PropTypes.object, //基于指定位置渲染动画，格式为： { x: 10,y: 20}
    // 窗体是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定义的动画样式
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    //  mask是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定义的动画样式
    maskAnimation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    transitionAppearTimeout: PropTypes.number, //动画出现持续时间
    transitionEnterTimeout: PropTypes.number, //动画进入持续时间
    transitionLeaveTimeout: PropTypes.number, //动画离开持续时间
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]), //标题
    hideHeader: PropTypes.bool, // 控制是否显示 header
    footer: PropTypes.element, // 底部按钮设置
    children: PropTypes.node, // 窗体内容
    preventTouchmove: PropTypes.bool, //当显示模态窗口时，是否阻止 touchmove 事件
    hideAllModal: PropTypes.bool, // 当打开多个模态窗口时，根据该属性来控制是否关闭所有模态窗口
  };

  static defaultProps = {
    prefixCls: 'rc-modal',
    hideHeader: false,
    className: '',
    mask: true,
    closable: true,
    onClose: () => {
    },
    position: 'center',
    transitionAppearTimeout: 300, // 动画出现持续时间
    transitionEnterTimeout: 300, // 动画进入持续时间
    transitionLeaveTimeout: 300,  // 动画离开持续时间
    hideAllModal: true
  };

  constructor(props) {
    super(props);
    this.scrollbarWidth = scrollbarWidth();
  }

  componentDidMount() {
    this.toggleModal({});
  }

  componentDidUpdate(prevProps) {
    this.toggleModal(prevProps);
  }

  componentWillUnmount() {
    const {preventTouchmove} = this.props;
    if (preventTouchmove) {
      document.body.removeEventListener('touchmove', this.preventTouch, false);
    }
  }

  // 显示或隐藏模态窗口
  toggleModal(prevProps) {
    const {visible, animationPosition, animation, maskAnimation, transitionLeaveTimeout} = this.props;
    if (visible) {
      if (!prevProps.visible) {
        this.refs.modal.focus();
        this.addScrollingEffect();

        const madalNode = this.refs.modal;
        if (animation && animationPosition) {
          const elOffset = offset(madalNode);
          setTransformOrigin(madalNode,
            `${animationPosition.x - elOffset.left}px ${animationPosition.y - elOffset.top}px`);
        } else {
          setTransformOrigin(madalNode, '');
        }
      }
    } else {
      if (animation || maskAnimation) {
        setTimeout(() => {
          this.removeScrollingEffect();
        }, transitionLeaveTimeout);
      } else {
        this.removeScrollingEffect();
      }
    }
  }

  // 隐藏 body 自身的滚动条，同时修改其 padding right
  addScrollingEffect() {
    if (scrollingEffect) {
      return;
    }

    scrollingEffect = true;
    const {prefixCls, preventTouchmove} = this.props;
    const {classList} = document.body;
    const htmlClassList = document.documentElement.classList;
    const scrollingClassName = `${prefixCls}-open`;
    classList.add(scrollingClassName);
    //在 html 上也加上隐藏滚动条样式
    htmlClassList.add(scrollingClassName);

    this.bodyIsOverflowing = checkBodyScrollbar();
    if (this.bodyIsOverflowing) {
      this.originalPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    }
    if (preventTouchmove) {
      document.body.addEventListener('touchmove', this.preventTouch, false);
    }
  }

  // 恢复 body 原生样式
  removeScrollingEffect() {
    if (scrollingEffect === false) {
      return;
    }
    scrollingEffect = false;

    const {prefixCls, preventTouchmove, hideAllModal} = this.props;
    if (preventTouchmove) {
      document.body.removeEventListener('touchmove', this.preventTouch, false);
    }

    if (hideAllModal) {
      const {classList} = document.body;
      const htmlClassList = document.documentElement.classList;
      const scrollingClassName = `${prefixCls}-open`;
      classList.remove(scrollingClassName);
      htmlClassList.remove(scrollingClassName);

      if (this.bodyIsOverflowing) {
        document.body.style.paddingRight = this.originalPaddingRight;
      }
    }
  }

  // 关闭 modal 窗口
  onClose = (e) => {
    this.props.onClose(e);
  };

  onMaskClick = (e) => {
    const {closable, maskClosable} = this.props;
    if (e.target === e.currentTarget && closable && maskClosable) {
      this.onClose(e);
    }
  };

  onKeyDown = (e) => {
    const {closable, keyboard} = this.props;
    if (closable && keyboard) {
      if (e.keyCode === 27) {
        this.onClose(e);
      }
    }
  };

  preventTouch = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  renderMask(zIndex) {
    const {
      mask, prefixCls, visible, className,
      transitionAppearTimeout, transitionEnterTimeout, transitionLeaveTimeout
    } = this.props;
    let {maskAnimation} = this.props;
    if (mask) {
      const maskElement = visible
        ? (<div className={`${prefixCls}-mask ${className || ''}`}
                style={zIndex ? {zIndex} : null}/>) : null;
      if (maskAnimation) {
        if (typeof maskAnimation === 'boolean') {
          maskAnimation = `${prefixCls}-fade`;
        }
        return (
          <ReactCSSTransitionGroup
            component="div"
            transitionAppear
            transitionName={maskAnimation}
            transitionAppearTimeout={transitionAppearTimeout}
            transitionEnterTimeout={transitionEnterTimeout}
            transitionLeaveTimeout={transitionLeaveTimeout}>
            {maskElement}
          </ReactCSSTransitionGroup>
        );
      }
      return maskElement;
    }
    return null;
  }

  renderModalContent(zIndex) {
    const {
      closable, prefixCls, hideHeader, title, footer, style,
      className, children, visible, headerStyle, bodyStyle, footerStyle, position,
      transitionAppearTimeout, transitionEnterTimeout, transitionLeaveTimeout
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
    if (!hideHeader) {
      headerEl = (<div className={`${prefixCls}-header`} style={headerStyle}>
        {closeEl}
        <div className={`${prefixCls}-title`}>
          {title}
        </div>
      </div>);
    }

    let footerEl;
    if (footer) {
      footerEl = (<div className={`${prefixCls}-footer`} style={footerStyle}>
        {footer}
      </div>);
    }

    const modalStyle = {...style};
    if (visible) {
      modalStyle.display = null;
    }

    let posCls = '';
    if (position) {
      if (typeof position === 'string') {
        posCls = `${prefixCls}-${position}`;
      } else if (typeof position === 'object') {
        modalStyle.position = 'absolute';
        Object.keys(position).forEach((item) => {
          if (positionKey.indexOf(item) !== -1) {
            modalStyle[item] = position[item];
          }
        });
      }
    }

    const modalElement = visible ? (
      <div ref="modal" tabIndex="-1" className={`${prefixCls} ${className || ''} ${posCls}`}
           style={zIndex ? {zIndex} : null}
           onKeyDown={this.onKeyDown}
           onClick={this.onMaskClick}
      >
        <div style={modalStyle} className={`${prefixCls}-dialog`}>
          <div className={`${prefixCls}-content`}>
            {headerEl}
            <div className={`${prefixCls}-body`} style={bodyStyle}>
              {children}
            </div>
            {footerEl}
          </div>
        </div>
      </div>
    ) : null;

    let {animation} = this.props;
    if (animation) {
      if (typeof animation === 'boolean') {
        animation = `${prefixCls}-zoom`;
      }
      return (
        <ReactCSSTransitionGroup
          component="div"
          transitionAppear
          transitionName={animation}
          transitionAppearTimeout={transitionAppearTimeout}
          transitionEnterTimeout={transitionEnterTimeout}
          transitionLeaveTimeout={transitionLeaveTimeout}>
          {modalElement}
        </ReactCSSTransitionGroup>
      );
    }

    return modalElement;
  }

  render() {
    const {zIndex} = this.props;
    let maskZIndex;
    let modalZIndex;
    if (zIndex !== undefined && zIndex !== null) {
      maskZIndex = zIndex;
      modalZIndex = zIndex + 1;
    }

    return (<div>
      {this.renderMask(maskZIndex)}
      {this.renderModalContent(modalZIndex)}
    </div>);
  }
}

export default ReactModal;
