"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Section = _interopRequireDefault(require("./Section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalToggle: false
    });

    _defineProperty(_assertThisInitialized(_this), "modalContent", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "modalContentW", 0);

    _defineProperty(_assertThisInitialized(_this), "modalContentH", 0);

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      var style = getComputedStyle(_this.modalContent.current);
      var paddingTop = style.paddingTop,
          paddingRight = style.paddingRight,
          paddingBottom = style.paddingBottom,
          paddingLeft = style.paddingLeft;
      paddingTop = parseFloat(paddingTop);
      paddingRight = parseFloat(paddingRight);
      paddingBottom = parseFloat(paddingBottom);
      paddingLeft = parseFloat(paddingLeft);
      _this.modalContentW = _this.modalContent.current.offsetWidth - paddingLeft - paddingRight;
      _this.modalContentH = _this.modalContent.current.offsetHeight - paddingTop - paddingBottom;
      if (_this.props.callback) _this.props.callback(_this.modalContentW, _this.modalContentH);
    });

    _defineProperty(_assertThisInitialized(_this), "openModal", function () {
      return _this.setState({
        modalToggle: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        modalToggle: false
      });

      if (_this.props.onClose) _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "extendElement", function (element) {
      if ( /*#__PURE__*/(0, _react.isValidElement)(element)) return /*#__PURE__*/(0, _react.cloneElement)(element, {
        openModal: _this.openModal,
        closeModal: _this.closeModal
      });
      return element;
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', this.resize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.resize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          backgroundClassName = _this$props.backgroundClassName,
          _this$props$scrollBar = _this$props.scrollBar,
          scrollBar = _this$props$scrollBar === void 0 ? true : _this$props$scrollBar,
          layout = _this$props.layout;
      var children = this.props.children;
      if (this.state.modalToggle) if (!this.modalContentW || !this.modalContentH) (0, _react.useEffect)(function () {
        _this2.resize();
      });
      var header = layout === 'card' && this.props.header ? /*#__PURE__*/_react["default"].createElement("header", {
        className: "modal-card-head"
      }, this.props.header.title ? /*#__PURE__*/_react["default"].createElement("p", {
        className: "modal-card-title"
      }, this.props.header.title) : null, this.props.header.children ? this.props.header.children : null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.closeModal,
        className: "delete",
        "aria-label": "close"
      })) : null;
      children = this.props.body && this.props.body.children ? _objectSpread(_objectSpread({}, children), this.props.body.children) : children;
      children = _react.Children.map(children, this.extendElement);
      if (layout !== 'card') children = /*#__PURE__*/_react["default"].createElement("section", {
        className: "section",
        style: {
          padding: '1.5rem'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "box"
      }, children));
      var body = this.props.body && this.props.body.children || children ? /*#__PURE__*/_react["default"].createElement("section", {
        className: (layout === 'card' ? 'modal-card-body' : 'modal-content') + (this.props.body && this.props.body.className ? " ".concat(this.props.body.className) : ''),
        style: {
          height: '100vh',
          overflow: !scrollBar ? 'hidden' : 'auto'
        },
        ref: this.modalContent
      }, children) : null;
      var footer = this.props.footer && this.props.footer.children ? /*#__PURE__*/_react["default"].createElement("footer", {
        className: (layout === 'card' ? 'modal-card-foot' : 'modal-footer') + (this.props.footer.className ? " ".concat(this.props.footer.className) : '')
      }, this.props.footer.children) : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'modal' + (className ? " ".concat(className) : '') + (this.state.modalToggle ? ' is-active' : ''),
        tabIndex: "0",
        onKeyDown: function onKeyDown(e) {
          if (e.key === 'Escape' && _this2.state.modalToggle) _this2.closeModal();
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'modal-background' + (backgroundClassName ? " ".concat(backgroundClassName) : ''),
        onClick: this.closeModal
      }), layout === 'card' ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-card"
      }, header, body, footer) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, body, footer, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.closeModal,
        className: "modal-close is-large",
        "aria-label": "close"
      })));
    }
  }]);

  return Modal;
}(_react.Component);

exports["default"] = Modal;