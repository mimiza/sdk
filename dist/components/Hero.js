"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(_ref) {
  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      style = _ref.style;
  var _style = {};

  if (image) {
    if (/\s?has-icon-background-.*\s?/g.test(className)) _style.backgroundImage = "url(\"".concat(image, "\")");else {
      _style.background = "url(\"".concat(image, "\") no-repeat center center");
      _style.backgroundSize = 'contain';
    }
  }

  style = _objectSpread(_objectSpread({}, _style), style);
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: 'hero' + (className ? " ".concat(className) : ''),
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-body"
  }, /\s?is-wrapped\s?/g.test(className) ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, children) : children));
};

exports["default"] = _default;