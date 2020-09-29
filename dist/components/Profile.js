"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _access = require("../services/access");

var _i18n = require("../services/i18n");

var _context = _interopRequireDefault(require("../services/context"));

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

var Profile = /*#__PURE__*/function (_Component) {
  _inherits(Profile, _Component);

  var _super = _createSuper(Profile);

  function Profile() {
    var _this;

    _classCallCheck(this, Profile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      authenticated: false
    });

    return _this;
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          className = _this$props.className;
      var common = pageContext.common,
          locale = pageContext.locale;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          if (!_this2.context.authenticated) (0, _gatsby.navigate)("/".concat(locale, "/sign-in"));
        },
        className: 'button' + (className ? " ".concat(className) : '')
      }, this.context.authenticated && this.context.picture ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "image icon"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.context.picture,
        alt: "",
        className: "is-rounded"
      })) : /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: "/images/icons/user.svg",
        alt: ""
      }))), this.context.authenticated ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-dropdown is-right"
      }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
        pageContext: this.props.pageContext,
        to: "/dashboard/profile",
        className: "navbar-item has-text-centered has-text-weight-bold"
      }, this.context.firstName, " ", this.context.lastName, ' ', this.context.username ? "(".concat(this.context.username, ")") : null), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "navbar-divider"
      }), /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
        pageContext: this.props.pageContext,
        to: "/dashboard",
        className: "navbar-item"
      }), /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
        pageContext: this.props.pageContext,
        to: "/dashboard/profile",
        className: "navbar-item"
      }), /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
        pageContext: this.props.pageContext,
        to: "/dashboard/authorize",
        className: "navbar-item"
      }), /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
        pageContext: this.props.pageContext,
        to: "/dashboard/change-password",
        className: "navbar-item"
      }), /*#__PURE__*/_react["default"].createElement("hr", {
        className: "navbar-divider"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "navbar-item"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          (0, _access.logOut)(function () {
            _this2.setState({
              authenticated: false
            });

            (0, _gatsby.navigate)("/".concat(locale));
          });
        },
        className: "button is-fullwidth is-primary is-rounded"
      }, common.logout))) : null);
    }
  }]);

  return Profile;
}(_react.Component);

exports["default"] = Profile;

_defineProperty(Profile, "contextType", _context["default"]);