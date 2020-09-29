"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Hero = _interopRequireDefault(require("./Hero"));

var _Divider = _interopRequireDefault(require("./Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var children = _ref.children,
      className = _ref.className,
      data = _ref.data,
      image = _ref.image;
  return /*#__PURE__*/_react["default"].createElement(_Hero["default"], {
    className: className,
    image: image
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, data && data.header ? /*#__PURE__*/_react["default"].createElement("header", {
    className: 'title is-2 is-spaced' + (/\s?is-light\s?/g.test(className) ? ' has-text-white' : ' has-text-primary')
  }, data.header) : null, data && data.subheader ? /*#__PURE__*/_react["default"].createElement("header", {
    className: 'subtitle is-4' + (/\s?is-light\s?/g.test(className) ? ' has-text-light' : ' has-text-grey-dark')
  }, data.subheader) : null, data ? /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    className: 'is-tiny is-primary' + (/\s?has-text-centered\s?/g.test(className) ? ' is-centered' : /\s?has-text-right\s?/g.test(className) ? ' is-right' : '')
  }) : null, data && data.description ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "content is-medium"
  }, data.description) : null, children));
};

exports["default"] = _default;