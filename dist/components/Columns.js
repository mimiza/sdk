"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("./List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var data = _ref.data,
      className = _ref.className,
      render = _ref.render;
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "columns is-multiline"
  }, data.map(function (element, key) {
    var item = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, element.image ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "has-text-centered"
    }, /*#__PURE__*/_react["default"].createElement("figure", {
      className: "image"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: element.image,
      alt: element.header,
      style: {
        maxWidth: 180,
        width: '70%',
        margin: 'auto'
      }
    }))) : null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("header", {
      className: "title is-4 has-text-primary is-uppercase has-text-weight-bold is-spaced"
    }, element.header), /*#__PURE__*/_react["default"].createElement("header", {
      className: "subtitle is-6 has-text-primary has-text-weight-normal"
    }, element.subheader), element.description && Array.isArray(element.description) ? /*#__PURE__*/_react["default"].createElement(_List["default"], {
      className: className,
      data: element.description
    }) : element.description ? element.description : null);

    var result = /*#__PURE__*/_react["default"].createElement("div", {
      className: 'column has-text-centered' + (className ? " ".concat(className) : ''),
      key: key
    }, render ? render(item) : item);

    return result;
  }));
};

exports["default"] = _default;