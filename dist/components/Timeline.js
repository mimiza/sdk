"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var data = _ref.data,
      className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'timeline' + (className ? " ".concat(className) : '')
  }, data.map(function (timeline, key) {
    if (timeline.type === 'header') {
      return /*#__PURE__*/_react["default"].createElement("header", {
        className: "timeline-header",
        key: key
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'tag' + (timeline.className ? " ".concat(timeline.className) : '')
      }, timeline.header));
    } else {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: 'timeline-item' + (timeline.className ? " ".concat(timeline.className) : ''),
        key: key
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'timeline-marker' + (timeline.marker && timeline.marker.className ? " ".concat(timeline.marker.className) : '') + (timeline.marker && timeline.marker.className && timeline.marker.image ? ' is-image' : '') + (timeline.marker && timeline.marker.className && timeline.marker.icon ? ' is-icon' : '')
      }, timeline.marker && timeline.marker.image ? /*#__PURE__*/_react["default"].createElement("img", {
        src: timeline.marker.image,
        alt: timeline.header
      }) : null, timeline.marker && timeline.marker.icon ? /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas ".concat(timeline.marker.icon)
      }) : null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "timeline-content"
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "heading"
      }, timeline.header), /*#__PURE__*/_react["default"].createElement("p", null, timeline.content)));
    }
  }));
};

exports["default"] = _default;