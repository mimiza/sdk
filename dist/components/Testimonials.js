"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Testimonial = _interopRequireDefault(require("./Testimonial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var className = _ref.className,
      data = _ref.data,
      pageContext = _ref.pageContext;
  var i = true;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'columns is-multiline' + (className ? " ".concat(className) : '')
  }, data.map(function (element, key) {
    i = !i;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: 'column is-one-third' + (element.className ? " ".concat(element.className) : ''),
      key: key
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: 'box is-equal-height is-raised-on-hover' + (i === true ? ' has-background-success has-background-secondary has-text-light' : ' has-background-light')
    }, /*#__PURE__*/_react["default"].createElement(_Testimonial["default"], {
      pageContext: pageContext,
      data: element,
      className: i === true ? 'has-text-white' : ''
    })));
  }));
};

exports["default"] = _default;