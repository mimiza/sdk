"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("article", {
    className: "media"
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "media-left"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "image is-48x48"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: data.image
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "media-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "title is-4 has-text-weight-normal"
  }, data.title), /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle is-6 has-text-weight-normal"
  }, data.subtitle), /*#__PURE__*/_react["default"].createElement("p", null, data.description), children)));
};

exports["default"] = _default;