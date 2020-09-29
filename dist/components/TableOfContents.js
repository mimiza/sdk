"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext,
      data = _ref.data,
      className = _ref.className;
  var common = pageContext.common;
  return /*#__PURE__*/_react["default"].createElement("aside", {
    className: "menu"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "menu-label"
  }, common.tableOfContents), /*#__PURE__*/_react["default"].createElement("div", {
    className: "menu-list",
    dangerouslySetInnerHTML: {
      __html: pageContext.tableOfContents
    }
  }));
};

exports["default"] = _default;