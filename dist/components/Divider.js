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
  var className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'is-divider' + (className ? " ".concat(className) : ''),
    style: _objectSpread(_objectSpread({}, style), {}, {
      borderTopWidth: 1,
      marginLeft: /\s?is-centered\s?/g.test(className) ? 'auto' : /\s?is-right\s?/g.test(className) ? 'auto' : null,
      marginRight: /\s?is-centered\s?/g.test(className) ? 'auto' : /\s?is-right\s?/g.test(className) ? 0 : null,
      width: /\s?is-small\s?/g.test(className) ? 200 : /\s?is-tiny\s?/g.test(className) ? 100 : null
    })
  });
};

exports["default"] = _default;