"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Plan = _interopRequireDefault(require("./Plan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var className = _ref.className,
      children = _ref.children,
      data = _ref.data,
      pageContext = _ref.pageContext;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'pricing-table columns' + (className ? " ".concat(className) : '')
  }, data.map(function (element, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: 'column is-paddingless' + (element.className ? " ".concat(element.className) : ''),
      key: key
    }, /*#__PURE__*/_react["default"].createElement(_Plan["default"], {
      pageContext: pageContext,
      data: element
    }));
  }), children);
};

exports["default"] = _default;