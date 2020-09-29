"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var _props = props,
      key = _props.key,
      _props$onChange = _props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$disabled = _props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$fieldContext = _props.fieldContext,
      fieldContext = _props$fieldContext === void 0 ? null : _props$fieldContext;
  props = props.data || props;

  var input = /*#__PURE__*/_react["default"].createElement("input", {
    name: props.name,
    id: props.name,
    className: (['checkbox', 'radio'].indexOf(props.type) == -1 ? 'input' : '') + (props.className ? " ".concat(props.className) : ''),
    type: props.type,
    value: (['checkbox', 'radio'].indexOf(props.type) == -1 && fieldContext ? fieldContext : null) || props.value,
    placeholder: props.placeholder,
    onChange: onChange,
    "aria-label": props.label,
    disabled: disabled,
    checked: props.checked || (['checkbox', 'radio'].indexOf(props.type) > -1 && fieldContext ? true : false)
  });

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'control' + (props.icon && props.icon.left ? ' has-icons-left' : '') + (props.icon && props.icon.right ? ' has-icons-right' : ''),
    key: key
  }, props.type === 'checkbox' ? /*#__PURE__*/_react["default"].createElement("label", {
    className: "checkbox",
    "for": props.name
  }, input, " ", props.label) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.label ? /*#__PURE__*/_react["default"].createElement("label", {
    className: "label",
    "for": props.name
  }, props.label) : null, input, props.icon && props.icon.left ? /*#__PURE__*/_react["default"].createElement("span", {
    className: 'icon is-left' + (props.icon.left.className ? " ".concat(props.icon.left.className) : '')
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: props.icon.left.icon
  })) : null, props.icon && props.icon.right ? /*#__PURE__*/_react["default"].createElement("span", {
    className: 'icon is-right' + (props.icon.right.className ? " ".concat(props.icon.right.className) : '')
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: props.icon.right.icon
  })) : null), props.helper && props.helper.content ? /*#__PURE__*/_react["default"].createElement("p", {
    className: 'help' + (props.helper.className ? " ".concat(props.helper.className) : '')
  }, props.helper.content) : null);
};

exports["default"] = _default;