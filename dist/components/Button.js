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
      _props$onClick = _props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      _props$disabled = _props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled;
  props = props.data || props;

  var result =
  /*#__PURE__*/
  // <div className="control" key={key || props.name}>
  _react["default"].createElement("button", {
    name: props.name,
    className: 'button' + (props.className ? " ".concat(props.className) : ''),
    onClick: onClick,
    disabled: disabled,
    type: props.type === 'reset' ? 'reset' : 'submit'
  }, props.icon && props.icon.left ? /*#__PURE__*/_react["default"].createElement("span", {
    className: 'icon' + (props.icon.left.className ? " ".concat(props.icon.left.className) : '')
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: props.icon.left.icon
  })) : null, props.label || props.children ? /*#__PURE__*/_react["default"].createElement("span", null, props.label, props.children) : '', props.icon && props.icon.right ? /*#__PURE__*/_react["default"].createElement("span", {
    className: 'icon' + (props.icon.right.className ? " ".concat(props.icon.right.className) : '')
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: props.icon.right.icon
  })) : null) // </div>
  ;

  return props.render ? props.render(result) : result;
};

exports["default"] = _default;