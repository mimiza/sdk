"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: "media"
  }, data.image ? /*#__PURE__*/_react["default"].createElement("figure", {
    className: "media-left"
  }, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: data.path
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "image is-48x48"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: data.image,
    alt: data.header
  })))) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "media-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: data.path
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "title is-4 has-text-weight-normal"
  }, data.header), /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle is-6"
  }, data.subheader)), data.description ? /*#__PURE__*/_react["default"].createElement("p", null, data.description) : null, children)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "media-right"
  }, data.buttons));
};

exports["default"] = _default;