"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: 'media' + (className ? " ".concat(className) : ''),
    style: {
      borderTop: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "media-left"
  }, data.figure && data.figure.image ? /*#__PURE__*/_react["default"].createElement("p", {
    className: 'image is-32x32' + (data.figure.className ? " ".concat(data.figure.className) : '')
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: data.figure.image,
    alt: data.header
  })) : null, !data.figure || data.figure && !data.figure.image ? /*#__PURE__*/_react["default"].createElement("span", {
    className: 'icon' + (/\s?is-small\s?/g.test(className) ? ' is-small' : ' is-medium') + (data.figure && data.figure.className ? " ".concat(data.figure.className) : ' has-text-success')
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: 'fas' + (/\s?is-small\s?/g.test(className) ? '' : ' fa-2x ') + (data.figure && data.figure.icon ? " ".concat(data.figure.icon) : ' fa-check')
  })) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "media-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: 'title has-text-weight-normal' + (/\s?is-small\s?/g.test(className) ? ' is-6' : ' is-4')
  }, data && data.header ? data.header : data), data && data.subheader ? /*#__PURE__*/_react["default"].createElement("header", {
    className: 'subtitle has-text-weight-normal' + (/\s?is-small\s?/g.test(className) ? ' is-7' : ' is-6')
  }, data.subheader) : null, data && data.description ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "has-text-weight-light"
  }, data.description) : null, children)));
};

exports["default"] = _default;