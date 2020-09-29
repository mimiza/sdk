"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

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

var LocalePicker = /*#__PURE__*/function (_Component) {
  _inherits(LocalePicker, _Component);

  var _super = _createSuper(LocalePicker);

  function LocalePicker() {
    var _this;

    _classCallCheck(this, LocalePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      localeToggle: false
    });

    return _this;
  }

  _createClass(LocalePicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$pageConte = this.props.pageContext,
          siteLocales = _this$props$pageConte.siteLocales,
          locale = _this$props$pageConte.locale;
      return /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return _this2.setState({
            localeToggle: !_this2.state.localeToggle
          });
        },
        className: 'dropdown is-up' + (this.state.localeToggle ? ' is-active' : ''),
        role: "listbox",
        tabIndex: -1
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-trigger"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "button is-primary",
        "aria-haspopup": "true",
        "aria-controls": "dropdown-menu"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon is-small"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-globe-americas",
        "aria-hidden": "true"
      })), /*#__PURE__*/_react["default"].createElement("span", null, siteLocales.filter(function (_locale) {
        return _locale.code === locale;
      })[0].name), /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon is-small"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-angle-up",
        "aria-hidden": "true"
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-menu",
        id: "dropdown-menu",
        role: "menu"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "dropdown-content"
      }, siteLocales.map(function (_locale) {
        return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
          onClick: function onClick() {
            if (typeof window !== 'undefined') {
              window.localStorage.locale = _locale.code;
            }
          },
          to: "/".concat(_locale.code),
          className: "dropdown-item",
          key: _locale.code
        }, _locale.name);
      }))));
    }
  }]);

  return LocalePicker;
}(_react.Component);

exports["default"] = LocalePicker;