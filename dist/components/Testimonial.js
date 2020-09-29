"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Divider = _interopRequireDefault(require("./Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, data.image ? /*#__PURE__*/_react["default"].createElement("div", {
    className: 'is-flex' + (className ? " ".concat(className) : ''),
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "image is-128x128"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "is-rounded",
    src: data.image,
    alt: data.header ? data.header : null
  }))) : null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, data.header ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("header", {
    className: 'title is-5 has-text-weight-normal' + (className ? " ".concat(className) : '')
  }, data.header), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    className: "is-tiny is-centered is-primary"
  })) : null, data.description ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "has-text-weight-light"
  }, data.description) : null, data.footer ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "is-small"
  }, /*#__PURE__*/_react["default"].createElement("i", null, data.footer)) : null, children));
};

exports["default"] = _default;