"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Hero = _interopRequireDefault(require("./Hero"));

var _PageSubHeader = _interopRequireDefault(require("./PageSubHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext,
      children = _ref.children;
  var dictionary = pageContext.dictionary,
      image = pageContext.image;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Hero["default"], {
    className: 'has-background-theme is-medium is-primary has-text-centered' + (image ? '' : ' has-background-theme'),
    pageContext: pageContext
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container",
    style: {
      maxWidth: 960
    }
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "title is-1 has-text-weight-light is-spaced"
  }, dictionary.header), /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle is-3 has-text-weight-light"
  }, dictionary.subheader), children)), /*#__PURE__*/_react["default"].createElement(_PageSubHeader["default"], {
    pageContext: pageContext
  }));
};

exports["default"] = _default;