(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["reactModal"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["reactModal"] = factory(root["react"], root["react-addons-css-transition-group"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactModalWrap = __webpack_require__(3);

var _ReactModalWrap2 = _interopRequireDefault(_ReactModalWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ReactModalWrap2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(7);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _scrollbarWidth = __webpack_require__(6);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _checkBodyScrollbar = __webpack_require__(4);

var _checkBodyScrollbar2 = _interopRequireDefault(_checkBodyScrollbar);

var _offset = __webpack_require__(5);

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scrollingEffect = false;
var positionKey = ['left', 'right', 'top', 'bottom'];

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    if (style[prefix + 'TransformOrigin'] !== undefined) {
      style[prefix + 'TransformOrigin'] = value;
    }
  });
  style.transformOrigin = value;
}

/**!
 * Modal React Component
 * reactjs-modal: https://github.com/reactjs-ui/reactjs-modal
 *
 */

var ReactModal = function (_Component) {
  _inherits(ReactModal, _Component);

  function ReactModal(props) {
    _classCallCheck(this, ReactModal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactModal).call(this, props));

    _this.scrollbarWidth = (0, _scrollbarWidth2.default)();
    _this.onClose = _this.onClose.bind(_this);
    _this.onMaskClick = _this.onMaskClick.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.preventTouch = _this.preventTouch.bind(_this);
    return _this;
  }

  _createClass(ReactModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.toggleModal({});
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.toggleModal(prevProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var preventTouchmove = this.props.preventTouchmove;

      if (preventTouchmove) {
        document.body.removeEventListener('touchmove', this.preventTouch, false);
      }
    }

    // 显示或隐藏模态窗口

  }, {
    key: 'toggleModal',
    value: function toggleModal(prevProps) {
      var _this2 = this;

      var _props = this.props;
      var visible = _props.visible;
      var animationPosition = _props.animationPosition;
      var animation = _props.animation;
      var maskAnimation = _props.maskAnimation;
      var transitionLeaveTimeout = _props.transitionLeaveTimeout;

      if (visible) {
        if (!prevProps.visible) {
          this.refs.modal.focus();
          this.addScrollingEffect();

          var madalNode = this.refs.modal;
          if (animation && animationPosition) {
            var elOffset = (0, _offset2.default)(madalNode);
            setTransformOrigin(madalNode, animationPosition.x - elOffset.left + 'px ' + (animationPosition.y - elOffset.top) + 'px');
          } else {
            setTransformOrigin(madalNode, '');
          }
        }
      } else {
        if (animation || maskAnimation) {
          setTimeout(function () {
            _this2.removeScrollingEffect();
          }, transitionLeaveTimeout);
        } else {
          this.removeScrollingEffect();
        }
      }
    }

    // 隐藏 body 自身的滚动条，同时修改其 padding right

  }, {
    key: 'addScrollingEffect',
    value: function addScrollingEffect() {
      if (scrollingEffect) {
        return;
      }

      scrollingEffect = true;
      var _props2 = this.props;
      var prefixCls = _props2.prefixCls;
      var preventTouchmove = _props2.preventTouchmove;

      var classList = document.body.classList;
      var htmlClassList = document.documentElement.classList;
      var scrollingClassName = prefixCls + '-open';
      classList.add(scrollingClassName);
      //在 html 上也加上隐藏滚动条样式
      htmlClassList.add(scrollingClassName);

      this.bodyIsOverflowing = (0, _checkBodyScrollbar2.default)();
      if (this.bodyIsOverflowing) {
        this.originalPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = this.scrollbarWidth + 'px';
      }
      if (preventTouchmove) {
        document.body.addEventListener('touchmove', this.preventTouch, false);
      }
    }

    // 恢复 body 原生样式

  }, {
    key: 'removeScrollingEffect',
    value: function removeScrollingEffect() {
      if (scrollingEffect === false) {
        return;
      }
      scrollingEffect = false;

      var _props3 = this.props;
      var prefixCls = _props3.prefixCls;
      var preventTouchmove = _props3.preventTouchmove;
      var hideAllModal = _props3.hideAllModal;

      if (preventTouchmove) {
        document.body.removeEventListener('touchmove', this.preventTouch, false);
      }

      if (hideAllModal) {
        var classList = document.body.classList;
        var htmlClassList = document.documentElement.classList;
        var scrollingClassName = prefixCls + '-open';
        classList.remove(scrollingClassName);
        htmlClassList.remove(scrollingClassName);

        if (this.bodyIsOverflowing) {
          document.body.style.paddingRight = this.originalPaddingRight;
        }
      }
    }

    // 关闭 modal 窗口

  }, {
    key: 'onClose',
    value: function onClose(e) {
      this.props.onClose(e);
    }
  }, {
    key: 'onMaskClick',
    value: function onMaskClick(e) {
      var _props4 = this.props;
      var closable = _props4.closable;
      var maskClosable = _props4.maskClosable;

      if (e.target === e.currentTarget && closable && maskClosable) {
        this.onClose(e);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _props5 = this.props;
      var closable = _props5.closable;
      var keyboard = _props5.keyboard;

      if (closable && keyboard) {
        if (e.keyCode === 27) {
          this.onClose(e);
        }
      }
    }
  }, {
    key: 'preventTouch',
    value: function preventTouch(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: 'renderMask',
    value: function renderMask(zIndex) {
      var _props6 = this.props;
      var mask = _props6.mask;
      var prefixCls = _props6.prefixCls;
      var maskAnimation = _props6.maskAnimation;
      var visible = _props6.visible;
      var className = _props6.className;
      var transitionAppearTimeout = _props6.transitionAppearTimeout;
      var transitionEnterTimeout = _props6.transitionEnterTimeout;
      var transitionLeaveTimeout = _props6.transitionLeaveTimeout;

      if (mask) {
        var maskElement = visible ? _react2.default.createElement('div', { className: prefixCls + '-mask ' + (className || ''), style: zIndex ? { zIndex: zIndex } : null }) : null;
        if (maskAnimation) {
          if (typeof maskAnimation === 'boolean') {
            maskAnimation = prefixCls + '-fade';
          }
          return _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              component: 'div',
              transitionAppear: true,
              transitionName: maskAnimation,
              transitionAppearTimeout: transitionAppearTimeout,
              transitionEnterTimeout: transitionEnterTimeout,
              transitionLeaveTimeout: transitionLeaveTimeout },
            maskElement
          );
        }
        return maskElement;
      }
      return null;
    }
  }, {
    key: 'renderModalContent',
    value: function renderModalContent(zIndex) {
      var _props7 = this.props;
      var closable = _props7.closable;
      var prefixCls = _props7.prefixCls;
      var title = _props7.title;
      var footer = _props7.footer;
      var style = _props7.style;
      var className = _props7.className;
      var children = _props7.children;
      var visible = _props7.visible;
      var bodyStyle = _props7.bodyStyle;
      var footerStyle = _props7.footerStyle;
      var position = _props7.position;
      var transitionAppearTimeout = _props7.transitionAppearTimeout;
      var transitionEnterTimeout = _props7.transitionEnterTimeout;
      var transitionLeaveTimeout = _props7.transitionLeaveTimeout;


      var closeEl = void 0;
      if (closable) {
        closeEl = _react2.default.createElement(
          'button',
          {
            onClick: this.onClose,
            className: prefixCls + '-close'
          },
          _react2.default.createElement('span', { className: prefixCls + '-close-x' })
        );
      }

      var headerEl = void 0;
      if (title) {
        headerEl = _react2.default.createElement(
          'div',
          { className: prefixCls + '-header' },
          closeEl,
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-title' },
            title
          )
        );
      }

      var footerEl = void 0;
      if (footer) {
        footerEl = _react2.default.createElement(
          'div',
          { className: prefixCls + '-footer', style: footerStyle },
          footer
        );
      }

      var modalStyle = _extends({}, style);
      if (visible) {
        modalStyle.display = null;
      }

      var posCls = '';
      if (position) {
        if (typeof position === 'string') {
          posCls = prefixCls + '-' + position;
        } else if ((typeof position === 'undefined' ? 'undefined' : _typeof(position)) === 'object') {
          modalStyle.position = 'absolute';
          Object.keys(position).forEach(function (item) {
            if (positionKey.indexOf(item) !== -1) {
              modalStyle[item] = position[item];
            }
          });
        }
      }

      var modalElement = visible ? _react2.default.createElement(
        'div',
        { ref: 'modal', tabIndex: '-1', className: prefixCls + ' ' + (className || '') + ' ' + posCls,
          style: zIndex ? { zIndex: zIndex } : null,
          onKeyDown: this.onKeyDown,
          onClick: this.onMaskClick
        },
        _react2.default.createElement(
          'div',
          { style: modalStyle, className: prefixCls + '-dialog' },
          _react2.default.createElement(
            'div',
            { className: prefixCls + '-content' },
            headerEl,
            _react2.default.createElement(
              'div',
              { className: prefixCls + '-body', style: bodyStyle },
              children
            ),
            footerEl
          )
        )
      ) : null;

      var animation = this.props.animation;

      if (animation) {
        if (typeof animation === 'boolean') {
          animation = prefixCls + '-zoom';
        }
        return _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            component: 'div',
            transitionAppear: true,
            transitionName: animation,
            transitionAppearTimeout: transitionAppearTimeout,
            transitionEnterTimeout: transitionEnterTimeout,
            transitionLeaveTimeout: transitionLeaveTimeout },
          modalElement
        );
      }

      return modalElement;
    }
  }, {
    key: 'render',
    value: function render() {
      var zIndex = this.props.zIndex;

      var maskZIndex = void 0;
      var modalZIndex = void 0;
      if (zIndex !== undefined && zIndex !== null) {
        maskZIndex = zIndex;
        modalZIndex = zIndex + 1;
      }

      return _react2.default.createElement(
        'div',
        null,
        this.renderMask(maskZIndex),
        this.renderModalContent(modalZIndex)
      );
    }
  }]);

  return ReactModal;
}(_react.Component);

ReactModal.defaultProps = {
  prefixCls: 'rc-modal',
  className: '',
  mask: true,
  closable: true,
  onClose: function onClose() {},
  position: 'center',
  transitionAppearTimeout: 300, //动画出现持续时间
  transitionEnterTimeout: 300, //动画进入持续时间
  transitionLeaveTimeout: 300, //动画离开持续时间
  hideAllModal: true
};

ReactModal.propTypes = {
  prefixCls: _react.PropTypes.string, // Modal 窗口 class，默认为 rc-modal
  className: _react.PropTypes.string, //自定义 class 样式
  style: _react.PropTypes.object, //	自定义 style 比如 width 或 height
  bodyStyle: _react.PropTypes.object, //	自定义 modal body 的样式，比如 width height 滚动条等
  footerStyle: _react.PropTypes.object, //	自定义 modal footer 的样式，比如 width height 滚动条等
  zIndex: _react.PropTypes.number, // 模态窗口 zIndex
  visible: _react.PropTypes.bool, // Modal 窗口是否可见
  closable: _react.PropTypes.bool, // 是否显示关闭按钮
  onClose: _react.PropTypes.func, // 关闭回调函数
  keyboard: _react.PropTypes.bool, // 按 esc 是否关闭窗口
  mask: _react.PropTypes.bool, // 是否显示遮罩效果
  maskClosable: _react.PropTypes.bool, //设为 true，当点击遮罩时，关闭窗口
  // 模态窗口显示位置，当设为字符串时，支持 top left right bottom center
  // left-top left-bottom right-top right-bottom， 设置对象表示其坐标 {x:number,y:number}
  position: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  animationPosition: _react.PropTypes.object, //基于指定位置渲染动画，格式为： { x: 10,y: 20}
  // 窗体是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定义的动画样式
  animation: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
  //  mask是否有动画效果，如果设为 false，则不启用动画，设为 true，使用默认的动画，字符串表示自定义的动画样式
  maskAnimation: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
  transitionAppearTimeout: _react.PropTypes.number, //动画出现持续时间
  transitionEnterTimeout: _react.PropTypes.number, //动画进入持续时间
  transitionLeaveTimeout: _react.PropTypes.number, //动画离开持续时间
  title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]), //标题
  footer: _react.PropTypes.element, // 底部按钮设置
  children: _react.PropTypes.node, // 窗体内容
  container: _react.PropTypes.element, //渲染模态窗口容器，默认为 document.body
  preventTouchmove: _react.PropTypes.bool, //当显示模态窗口时，是否阻止 touchmove 事件
  hideAllModal: _react.PropTypes.bool };

// 当打开多个模态窗口时，根据该属性来控制是否关闭所有模态窗口
exports.default = ReactModal;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ReactModal = __webpack_require__(2);

var _ReactModal2 = _interopRequireDefault(_ReactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**!
 * Modal React Component
 * reactjs-modal: https://github.com/reactjs-ui/reactjs-modal
 *
 */

var ReactModalWrap = function (_Component) {
  _inherits(ReactModalWrap, _Component);

  function ReactModalWrap(props) {
    _classCallCheck(this, ReactModalWrap);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactModalWrap).call(this, props));

    _this.state = {
      visible: props.visible
    };
    return _this;
  }

  _createClass(ReactModalWrap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.instanceModal();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('visible' in nextProps) {
        this.setState({
          visible: nextProps.visible
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return Boolean(this.state.visible || nextState.visible);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this.instanceModal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destoryModal();
    }

    // 销毁 Modal

  }, {
    key: 'destoryModal',
    value: function destoryModal() {
      if (this.modalContainer) {
        _reactDom2.default.unmountComponentAtNode(this.modalContainer);
        document.body.removeChild(this.modalContainer);
        this.modalContainer = null;
        this.modalUuid = null;
      }
    }

    //实例化 Modal，如果开始传入的 visible 为 false，则不实例化

  }, {
    key: 'instanceModal',
    value: function instanceModal() {
      if (this.rendered) {
        /**
         * ReactDOM.unstable_renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
         * parentComponent--父组件  nextElement--下一个组件  container--要绑定的dom
         */
        this.modalInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderModal(), this.renderModalContainer());
      }
    }

    //渲染窗口容器

  }, {
    key: 'renderModalContainer',
    value: function renderModalContainer() {
      if (!this.modalContainer) {
        var container = this.props.container;

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

  }, {
    key: 'renderModal',
    value: function renderModal() {
      if (!this.modalUuid) {
        this.modalUuid = 'modal' + ReactModalWrap.modalUuid++;
      }
      var props = this.props;
      var modalProps = _extends({}, props, {
        visible: this.state.visible
      });
      //设置 key 不会重复创建
      return _react2.default.createElement(
        _ReactModal2.default,
        _extends({}, modalProps, { key: this.modalUuid }),
        props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      // 是否渲染 modal，以下写法表示只渲染一次
      this.rendered = this.rendered || this.state.visible;
      return null;
    }
  }]);

  return ReactModalWrap;
}(_react.Component);

ReactModalWrap.modalUuid = 1;


ReactModalWrap.propTypes = {
  visible: _react.PropTypes.bool, // Modal 窗口是否可见
  children: _react.PropTypes.node,
  container: _react.PropTypes.element
};

exports.default = ReactModalWrap;

/***/ },
/* 4 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var fullWindowWidth = window.innerWidth;
  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    var documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }
  return document.body.clientWidth < fullWindowWidth;
};

/***/ },
/* 5 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  var docElem = void 0,
      win = void 0,
      rect = void 0,
      doc = void 0;

  if (!el) {
    return;
  }

  // Support: IE <=11 only
  // Running getBoundingClientRect on a
  // disconnected node in IE throws an error
  if (!el.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = el.getBoundingClientRect();

  // Make sure element is not hidden (display: none)
  if (rect.width || rect.height) {
    doc = el.ownerDocument;
    win = getWindow(doc);
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }
  return rect;
};

/**
 * Gets a window from an element
 */
function getWindow(elem) {
  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
} /**
   * 返回元素 offset
   * 不支持隐藏的元素
   * 参考 jQuery 实现
   * https://github.com/jquery/jquery/blob/master/src/offset.js
   * @param el
   * @returns {*}
   */


function isWindow(elem) {
  return elem != null && elem === elem.window;
}

/***/ },
/* 6 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasureStyle).forEach(function (item) {
    scrollDiv.style[item] = scrollbarMeasureStyle[item];
  });
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

//计算滚动条的宽度
var scrollbarMeasureStyle = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

/**
 * 返回滚动条宽度
 * @returns {number}
 */

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ])
});
;