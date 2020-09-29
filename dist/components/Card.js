"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var pageContext = props.pageContext,
      children = props.children,
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      headerNav = props.headerNav,
      footerNav = props.footerNav,
      className = props.className;
  var common = pageContext.common;

  var result = /*#__PURE__*/_react["default"].createElement("div", {
    className: 'card' + (className ? " ".concat(className) : ''),
    style: {
      borderRadius: 6
    },
    onClick: onClick
  }, data.title || data.state || headerNav ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "card-header-title"
  }, data.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header-icon"
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "level is-mobile"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-left"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-right"
  }, typeof data.state !== 'undefined' ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "level-item"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: 'icon is-small' + (data.state === true ? " has-text-success" : " has-text-grey-light")
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fas fa-circle"
  }))) : null, headerNav ? headerNav : null)))) : null, data.image ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/_react["default"].createElement("figure", {
    className: "image 4by3",
    style: {
      background: "url(\"".concat(data.image, "\") no-repeat center center"),
      backgroundSize: 'cover',
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      height: '20rem'
    }
  }, data.to ? /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: data.to,
    className: "card-header-title is-size-5 has-text-primary has-text-weight-normal",
    style: {
      height: '100%'
    }
  }) : null)) : null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-content"
  }, data.header ? /*#__PURE__*/_react["default"].createElement("header", {
    className: "title has-text-primary has-text-weight-normal"
  }, data.to ? /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: data.to,
    className: "has-text-primary has-text-weight-normal"
  }, data.header ? data.header : null) : data.header) : null, data.subheader ? /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle"
  }, data.subheader) : null, data.description ? /*#__PURE__*/_react["default"].createElement("p", null, data.description) : null, children, data.date ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("time", {
    className: "is-size-7 has-text-grey",
    dateTime: data.date
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon is-small has-text-dark"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fas fa-clock"
  })), ' ', common.lastUpdated, ": ", data.date)) : null), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "card-footer"
  }, data.to ? /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
    to: data.to,
    className: "card-footer-item"
  }, common.readMore) : null, data.links && data.links.length ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, data.links.map(function (_data) {
    var key = Object.keys(_data)[0];
    return /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
      to: _data[key],
      target: /^http/gi.test(_data[key]) ? '_blank' : '_self',
      className: "card-footer-item"
    }, common[key]);
  })) : null, footerNav ? footerNav : null)));

  return props.render ? props.render(result) : result;
};

exports["default"] = _default;