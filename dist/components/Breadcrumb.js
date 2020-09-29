"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _i18n = require("../services/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext,
      className = _ref.className;
  var breadcrumbs = pageContext.pagePath.split('/');
  var urls = [];
  breadcrumbs.map(function (key, index) {
    var url = breadcrumbs.slice(0, index + 1).join('/');
    if (url.length) urls.push(url);
    return null;
  });
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: className || 'breadcrumb',
    "aria-label": "breadcrumbs"
  }, /*#__PURE__*/_react["default"].createElement("ul", null, urls.map(function (path, index) {
    return /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
      pageContext: pageContext,
      to: path,
      render: function render(data) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: index === urls.length - 1 ? 'is-active' : ''
        }, data);
      },
      key: path
    });
  })));
};

exports["default"] = _default;