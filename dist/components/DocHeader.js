"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

var _PageLocalePicker = _interopRequireDefault(require("./PageLocalePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "doc-header section has-background-white-lighter",
    style: {
      padding: '0.5rem 0.75rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "level is-mobile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-left",
    style: {
      overflowX: 'auto',
      flexShrink: 1
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-item"
  }, /*#__PURE__*/_react["default"].createElement(_Breadcrumb["default"], {
    pageContext: pageContext
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-right has-text-right"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-item"
  }, /*#__PURE__*/_react["default"].createElement(_PageLocalePicker["default"], {
    pageContext: pageContext
  })))));
};

exports["default"] = _default;