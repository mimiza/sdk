"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("../services/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var className = _ref.className,
      data = _ref.data,
      pageContext = _ref.pageContext;
  var common = pageContext.common;
  return data ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
    to: "/tags",
    className: "subtitle is-uppercase is-7"
  }, common.tags, ":"), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'tags' + (className ? " ".concat(className) : '')
  }, data.map(function (element, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "tag",
      key: key
    }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
      to: "/tag/".concat(element)
    }, element));
  }))) : null;
};

exports["default"] = _default;