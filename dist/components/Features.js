"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Feature = _interopRequireDefault(require("./Feature"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "features"
  }, data.map(function (element, key) {
    return /*#__PURE__*/_react["default"].createElement(_Feature["default"], {
      data: element,
      key: key
    });
  }), children);
};

exports["default"] = _default;