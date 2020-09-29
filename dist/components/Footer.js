"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _LocalePicker = _interopRequireDefault(require("../components/LocalePicker"));

var _Improve = _interopRequireDefault(require("../components/Improve"));

var _brandingInverted = _interopRequireDefault(require("../images/branding-inverted.svg"));

var _i18n = require("../services/i18n");

var _Children = _interopRequireDefault(require("../components/Children"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var siteTitle = _ref.siteTitle,
      pageContext = _ref.pageContext;
  var common = pageContext.common;
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "content has-text-grey-light"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "section has-text-centered"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _brandingInverted["default"],
    alt: siteTitle,
    style: {
      width: 180
    }
  }))), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "hr has-background-dark"
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "content is-small has-text-centered has-text-grey"
  }, common.copyright, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
    className: "has-text-grey-light",
    to: "/terms-and-conditions",
    pageContext: pageContext
  }, common.terms), ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "has-text-white has-text-weight-bold"
  }, "\xB7"), ' ', /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
    className: "has-text-grey-light",
    to: "/privacy-policy",
    pageContext: pageContext
  }, common.privacy)));
};

exports["default"] = _default;