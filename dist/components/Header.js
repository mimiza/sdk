"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18n = require("../services/i18n");

var _Profile = _interopRequireDefault(require("./Profile"));

var _branding = _interopRequireDefault(require("../images/branding.svg"));

var _NavbarItem = _interopRequireDefault(require("../components/NavbarItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      navbarToggle: false
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageContext = this.props.pageContext;
      var common = pageContext.common;
      return /*#__PURE__*/_react["default"].createElement("nav", {
        className: "navbar is-fixed-top",
        role: "navigation",
        "aria-label": "main navigation"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-brand"
      }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
        pageContext: this.props.pageContext,
        to: "/",
        className: "navbar-item"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: _branding["default"],
        alt: this.props.siteTitle
      })), /*#__PURE__*/_react["default"].createElement("a", {
        onClick: function onClick() {
          return _this2.setState({
            navbarToggle: !_this2.state.navbarToggle
          });
        },
        role: "button",
        className: 'navbar-burger' + (this.state.navbarToggle ? ' is-active' : ''),
        "aria-label": "menu",
        "aria-expanded": "false",
        "data-target": "navbar"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        "aria-hidden": "true"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        "aria-hidden": "true"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        "aria-hidden": "true"
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        id: "navbar",
        className: 'navbar-menu' + (this.state.navbarToggle ? ' is-active' : '')
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-start"
      }, /*#__PURE__*/_react["default"].createElement(_NavbarItem["default"], {
        pageContext: pageContext,
        to: "/"
      }), /*#__PURE__*/_react["default"].createElement(_NavbarItem["default"], {
        pageContext: pageContext,
        to: "/exchanges",
        hasChildren: true
      }, common.exchanges), /*#__PURE__*/_react["default"].createElement(_NavbarItem["default"], {
        pageContext: pageContext,
        to: "/crypto-savings",
        hasChildren: true
      }, common.savings)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-end"
      }, /*#__PURE__*/_react["default"].createElement(_NavbarItem["default"], {
        pageContext: pageContext,
        to: "/blog"
      }), /*#__PURE__*/_react["default"].createElement(_NavbarItem["default"], {
        pageContext: pageContext,
        to: "/contact"
      }, common.contact), /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-item has-dropdown is-hoverable"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-link is-arrowless"
      }, /*#__PURE__*/_react["default"].createElement(_Profile["default"], {
        className: "is-white is-fullwidth is-rounded",
        pageContext: this.props.pageContext
      }))))));
    }
  }]);

  return Header;
}(_react.Component);

exports["default"] = Header;