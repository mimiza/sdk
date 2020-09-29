"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("../services/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext;
  return /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
    pageContext: pageContext,
    to: "/products/mimiza-facebulk"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "title is-5 has-text-centered"
  }, "Send Bulk Messages From Your Facebook Page"), /*#__PURE__*/_react["default"].createElement("figure", {
    className: "image"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/images/mimiza-facebulk.png",
    alt: "Mimiza FaceBulk"
  })));
};

exports["default"] = _default;