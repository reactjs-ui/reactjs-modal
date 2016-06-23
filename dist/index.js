(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["reactModal"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["reactModal"] = factory(root["react"], root["react-addons-css-transition-group"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__) {
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js?pack=cleaner!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./modal.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js?pack=cleaner!./../../node_modules/sass-loader/index.js?outputStyle=expanded!./modal.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(12);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _scrollbarWidth = __webpack_require__(10);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	var _checkBodyScrollbar = __webpack_require__(8);

	var _checkBodyScrollbar2 = _interopRequireDefault(_checkBodyScrollbar);

	var _offset = __webpack_require__(9);

	var _offset2 = _interopRequireDefault(_offset);

	__webpack_require__(1);

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
	      var prefixCls = this.props.prefixCls;

	      var className = document.body.className;
	      var scrollingClassName = prefixCls + '-open';
	      if (className.indexOf(scrollingClassName) === -1) {
	        document.body.className += ' ' + scrollingClassName;
	      }

	      this.bodyIsOverflowing = (0, _checkBodyScrollbar2.default)();
	      if (this.bodyIsOverflowing) {
	        this.originalPaddingRight = document.body.style.paddingRight;
	        document.body.style.paddingRight = this.scrollbarWidth + 'px';
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

	      var prefixCls = this.props.prefixCls;

	      var className = document.body.className;
	      var scrollingClassName = prefixCls + '-open';
	      if (className.indexOf(scrollingClassName) !== -1) {
	        document.body.className = className.replace(scrollingClassName, '');
	      }

	      if (this.bodyIsOverflowing) {
	        document.body.style.paddingRight = this.originalPaddingRight;
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
	      var _props2 = this.props;
	      var closable = _props2.closable;
	      var maskClosable = _props2.maskClosable;

	      if (e.target === e.currentTarget && closable && maskClosable) {
	        this.onClose(e);
	      }
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(e) {
	      var _props3 = this.props;
	      var closable = _props3.closable;
	      var keyboard = _props3.keyboard;

	      if (closable && keyboard) {
	        if (e.keyCode === 27) {
	          this.onClose(e);
	        }
	      }
	    }
	  }, {
	    key: 'renderMask',
	    value: function renderMask(zIndex) {
	      var _props4 = this.props;
	      var mask = _props4.mask;
	      var prefixCls = _props4.prefixCls;
	      var maskAnimation = _props4.maskAnimation;
	      var visible = _props4.visible;
	      var transitionAppearTimeout = _props4.transitionAppearTimeout;
	      var transitionEnterTimeout = _props4.transitionEnterTimeout;
	      var transitionLeaveTimeout = _props4.transitionLeaveTimeout;

	      if (mask) {
	        var maskElement = visible ? _react2.default.createElement('div', { className: prefixCls + '-mask', style: zIndex ? { zIndex: zIndex } : null }) : null;
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
	      var _props5 = this.props;
	      var closable = _props5.closable;
	      var prefixCls = _props5.prefixCls;
	      var title = _props5.title;
	      var footer = _props5.footer;
	      var style = _props5.style;
	      var className = _props5.className;
	      var children = _props5.children;
	      var visible = _props5.visible;
	      var bodyStyle = _props5.bodyStyle;
	      var position = _props5.position;
	      var transitionAppearTimeout = _props5.transitionAppearTimeout;
	      var transitionEnterTimeout = _props5.transitionEnterTimeout;
	      var transitionLeaveTimeout = _props5.transitionLeaveTimeout;


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
	          { className: prefixCls + '-footer' },
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
	  transitionLeaveTimeout: 300 //动画离开持续时间
	};

	ReactModal.propTypes = {
	  prefixCls: _react.PropTypes.string, // Modal 窗口 class，默认为 rc-modal
	  className: _react.PropTypes.string, //自定义 class 样式
	  style: _react.PropTypes.object, //	自定义 style 比如 width 或 height
	  bodyStyle: _react.PropTypes.object, //	自定义 modal body 的样式，比如 width height 滚动条等
	  zIndex: _react.PropTypes.number, //如果不设置则取调起 modal 窗口 dom 的 zIndex + 1
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
	  container: _react.PropTypes.element
	};

	exports.default = ReactModal;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(13);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ReactModal = __webpack_require__(3);

	var _ReactModal2 = _interopRequireDefault(_ReactModal);

	__webpack_require__(1);

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
	        this.modal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderModal(), this.renderModalContainer());
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
	      var props = this.props;
	      var modalProps = _extends({}, props, {
	        visible: this.state.visible
	      });
	      //设置 key 不会重复创建
	      return _react2.default.createElement(
	        _ReactModal2.default,
	        _extends({}, modalProps, { key: 'modal' }),
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

	ReactModalWrap.propTypes = {
	  visible: _react.PropTypes.bool, // Modal 窗口是否可见
	  children: _react.PropTypes.node,
	  container: _react.PropTypes.element
	};

	exports.default = ReactModalWrap;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ReactModalWrap = __webpack_require__(4);

	var _ReactModalWrap2 = _interopRequireDefault(_ReactModalWrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ReactModalWrap2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/**\n * React Modal style\n**/\n.rc-modal-open {\n  overflow: hidden;\n}\n\n.rc-modal-open .rc-modal-mask {\n  display: block;\n}\n\n.rc-modal-open .rc-modal {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.rc-modal-open .rc-modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.rc-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: none;\n}\n\n.rc-modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1001;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.rc-modal-dialog {\n  width: 100%;\n}\n\n.rc-modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  outline: 0;\n}\n\n.rc-modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.rc-modal-close {\n  position: absolute;\n  right: 15px;\n  -webkit-transition: opacity 140ms;\n  transition: opacity 140ms;\n  background: none;\n  border: none;\n  cursor: pointer;\n  line-height: 1ex;\n  margin: 0;\n  opacity: .4;\n  font-size: 24px;\n  text-decoration: none;\n}\n\n.rc-modal-close-x:after {\n  content: '\\D7';\n}\n\n.rc-modal-close:hover, .rc-modal-close:focus {\n  opacity: .8;\n  outline: 0;\n  text-decoration: none;\n}\n\n.rc-modal-body {\n  position: relative;\n  padding: 20px;\n}\n\n.rc-modal-footer {\n  border-top: 1px solid #e5e5e5;\n  padding: 10px 20px 10px 10px;\n  text-align: right;\n  border-radius: 0 0 5px 5px;\n}\n\n@media (min-width: 544px) {\n  .rc-modal-dialog {\n    width: 600px;\n  }\n}\n\n.rc-modal-left {\n  -ms-flex-align: center;\n      -ms-grid-row-align: center;\n      align-items: center;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n\n.rc-modal-right {\n  -ms-flex-align: center;\n      -ms-grid-row-align: center;\n      align-items: center;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n.rc-modal-top {\n  -ms-flex-align: start;\n      -ms-grid-row-align: flex-start;\n      align-items: flex-start;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.rc-modal-bottom {\n  -ms-flex-align: end;\n      -ms-grid-row-align: flex-end;\n      align-items: flex-end;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.rc-modal-center {\n  -ms-flex-align: center;\n      -ms-grid-row-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.rc-modal-left-top {\n  -ms-flex-align: start;\n      -ms-grid-row-align: flex-start;\n      align-items: flex-start;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n\n.rc-modal-left-bottom {\n  -ms-flex-align: end;\n      -ms-grid-row-align: flex-end;\n      align-items: flex-end;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n}\n\n.rc-modal-right-top {\n  -ms-flex-align: start;\n      -ms-grid-row-align: flex-start;\n      align-items: flex-start;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n.rc-modal-right-bottom {\n  -ms-flex-align: end;\n      -ms-grid-row-align: flex-end;\n      align-items: flex-end;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n.rc-modal-zoom-enter, .rc-modal-zoom-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n          animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n.rc-modal-zoom-leave {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n          animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n.rc-modal-zoom-enter.rc-modal-zoom-enter-active, .rc-modal-zoom-appear.rc-modal-zoom-appear-active {\n  -webkit-animation-name: rcModalZoomIn;\n          animation-name: rcModalZoomIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n.rc-modal-zoom-leave.rc-modal-zoom-leave-active {\n  -webkit-animation-name: rcModalZoomOut;\n          animation-name: rcModalZoomOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n@-webkit-keyframes rcModalZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n\n@keyframes rcModalZoomIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n}\n\n@-webkit-keyframes rcModalZoomOut {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n\n@keyframes rcModalZoomOut {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n  }\n}\n\n.rc-modal-fade-enter, .rc-modal-fade-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n.rc-modal-fade-leave {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n          animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n.rc-modal-fade-enter.rc-modal-fade-enter-active, .rc-modal-fade-appear.rc-modal-fade-appear-active {\n  -webkit-animation-name: rcModalFadeIn;\n          animation-name: rcModalFadeIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n.rc-modal-fade-leave.rc-modal-fade-leave-active {\n  -webkit-animation-name: rcModalFadeOut;\n          animation-name: rcModalFadeOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n@-webkit-keyframes rcModalFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes rcModalFadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes rcModalFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes rcModalFadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

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
/* 9 */
/***/ function(module, exports) {

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
/* 10 */
/***/ function(module, exports) {

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }
/******/ ])
});
;