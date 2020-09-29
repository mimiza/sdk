"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'pricing-plan' + (data.className ? " ".concat(data.className) : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "plan-header"
  }, data.header), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plan-price"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "plan-price-amount"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "plan-price-currency"
  }, data.currency, ' ', /*#__PURE__*/_react["default"].createElement("strike", {
    className: "has-text-weight-bold has-text-danger"
  }, data.price)), data.salePrice), "/", data.duration), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plan-items"
  }, data.items.map(function (item, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "plan-item",
      key: key
    }, item);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "plan-footer"
  }, typeof data.button === 'string' ? /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-uppercase has-text-weight-bold is-fullwidth"
  }, data.button) : data.button));
};

exports["default"] = _default;