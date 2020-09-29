"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext;
  var common = pageContext.common;

  var getPosition = function getPosition() {
    var popupWidth = typeof window !== 'undefined' ? window.screen.width / 2 : 600;
    var popupHeight = typeof window !== 'undefined' ? window.screen.height / 2 : 400;
    return {
      popupWidth: popupWidth,
      popupHeight: popupHeight,
      popupLeft: typeof window !== 'undefined' ? window.screen.width / 2 - popupWidth / 2 : 0,
      popupTop: typeof window !== 'undefined' ? window.screen.height / 2 - popupHeight / 2 : 0
    };
  };

  var facebookShare = function facebookShare() {
    if (typeof window !== 'undefined') {
      var position = getPosition();
      var url = 'https://www.facebook.com/dialog/share?app_id=310695146144723&href=' + encodeURIComponent(window.location.href);
      window.open(url, '', "width=".concat(position.popupWidth, ", height=").concat(position.popupHeight, ", left=").concat(position.popupLeft, ", top=").concat(position.popupTop, ", resizable=no"));
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: facebookShare,
    className: "button is-primary is-outlined tooltip",
    "data-tooltip": common.shareOnFacebook
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fab fa-facebook-f"
  }))), ' ', /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: typeof window !== 'undefined' ? window.location.href : ''
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button is-primary is-outlined tooltip",
    "data-tooltip": common.copyToClipboard
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fas fa-link"
  })))));
};

exports["default"] = _default;