"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _config = _interopRequireDefault(require("../../config"));

var _Data = _interopRequireDefault(require("./Data"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _utils = require("../services/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "data", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "getReferralCode", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _window, sea, user, message, signature, data, query, request;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof window !== "undefined")) {
                _context.next = 10;
                break;
              }

              _window = window, sea = _window.sea, user = _window.user;
              message = "getReferralCode";
              _context.next = 5;
              return sea.sign(message, user._.sea);

            case 5:
              signature = _context.sent;
              data = {
                signature: signature,
                user: {
                  pub: user.is.pub
                }
              };
              query = (0, _utils.encodeQuery)(data);
              request = "".concat(_config["default"].cloud.getReferralCode, "?").concat(query);
              fetch(request);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "callback", function (scope) {
      if (typeof window !== "undefined") {
        scope.map().once(function (data, key) {
          if (data) _this.data.current.loadData({
            data: {
              referralCode: key
            },
            key: key
          });
        });
      }
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var pageContext = this.props.pageContext;
      var common = pageContext.common;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "field"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "control"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "button is-primary",
        onClick: this.getReferralCode
      }, common.getReferralCode))), typeof window !== "undefined" && window.user && window.user.is ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Data["default"], {
        pageContext: pageContext,
        namespace: "gun",
        path: "~".concat(_config["default"].system.pub, "/user/").concat(window.user.is.pub, "/referralCode"),
        callback: this.callback,
        render: function render(item) {
          if (typeof window !== "undefined") {
            var referralLink = "".concat(window.location.origin, "/?ref=").concat(item.data.referralCode);
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "field has-addons"
            }, /*#__PURE__*/_react["default"].createElement("div", {
              className: "control has-icons-left is-expanded"
            }, /*#__PURE__*/_react["default"].createElement("input", {
              className: "input is-primary",
              type: "text",
              value: referralLink,
              readOnly: true
            }), /*#__PURE__*/_react["default"].createElement("span", {
              className: "icon is-left"
            }, /*#__PURE__*/_react["default"].createElement("i", {
              className: "fas fa-link"
            }))), /*#__PURE__*/_react["default"].createElement("div", {
              className: "control"
            }, /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
              text: referralLink
            }, /*#__PURE__*/_react["default"].createElement("button", {
              onClick: function onClick() {
                (0, _utils.notify)("".concat(common.referralCode, " ").concat(common.copied), "is-success");
              },
              className: "button is-primary"
            }, /*#__PURE__*/_react["default"].createElement("span", {
              className: "icon"
            }, /*#__PURE__*/_react["default"].createElement("i", {
              className: "fas fa-copy"
            })), /*#__PURE__*/_react["default"].createElement("span", null, common.copy)))));
          }
        },
        ref: this.data
      }), /*#__PURE__*/_react["default"].createElement(_Data["default"], {
        pageContext: pageContext,
        path: "message#".concat(window.user.is.pub)
      })) : null);
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;