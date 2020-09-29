"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pixel = require("../services/pixel");

var _Accordion = _interopRequireDefault(require("./Accordion"));

var _JvzooButton = _interopRequireDefault(require("./JvzooButton"));

var _PaypalButton = _interopRequireDefault(require("./PaypalButton"));

var _Divider = _interopRequireDefault(require("./Divider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var BuyButton = /*#__PURE__*/function (_Component) {
  _inherits(BuyButton, _Component);

  var _super = _createSuper(BuyButton);

  function BuyButton() {
    var _this;

    _classCallCheck(this, BuyButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalToggle: false,
      paymentMethods: []
    });

    return _this;
  }

  _createClass(BuyButton, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var params = (0, _pixel.getParams)();

      if (typeof window !== 'undefined') {
        var paymentMethods = (params.methods ? params.methods.replace(/\W*$/g, '').split('|') : null) || JSON.parse(localStorage.getItem('paymentMethods')) || [];
        localStorage.setItem('paymentMethods', JSON.stringify(paymentMethods));
        this.setState({
          paymentMethods: paymentMethods
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          data = _this$props.data,
          className = _this$props.className;
      var common = pageContext.common;

      var openModal = function openModal() {
        return _this2.setState({
          modalToggle: true
        });
      };

      var closeModal = function closeModal() {
        return _this2.setState({
          modalToggle: false
        });
      };

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, data.jvzoo && this.state.paymentMethods.indexOf('jvzoo') > -1 ? /*#__PURE__*/_react["default"].createElement(_JvzooButton["default"], {
        data: data,
        pageContext: pageContext,
        className: className
      }) : null, this.state.paymentMethods.indexOf('jvzoo') === -1 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: openModal,
        className: 'button is-uppercase has-text-weight-bold' + (className ? " ".concat(className) : '')
      }, common.buyNow), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'modal' + (this.state.modalToggle ? ' is-active' : '')
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-background has-background-white"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content",
        style: {
          height: '100%'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "section"
      }, /*#__PURE__*/_react["default"].createElement("header", {
        className: "title has-text-centered has-text-primary has-text-weight-normal"
      }, common.paymentMethodHeader), /*#__PURE__*/_react["default"].createElement("header", {
        className: "subtitle has-text-centered has-text-dark has-text-weight-light"
      }, common.paymentMethodSubheader), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
        className: "is-primary is-centered is-tiny"
      }), /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
        style: {
          overflowY: 'auto'
        },
        data: [{
          marker: {
            className: 'is-small',
            icon: 'fa-credit-card'
          },
          header: common.onlinePayments,
          children: /*#__PURE__*/_react["default"].createElement("div", {
            className: "columns is-centered"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "column"
          }, /*#__PURE__*/_react["default"].createElement(_PaypalButton["default"], {
            data: data,
            pageContext: pageContext,
            style: {
              label: 'pay',
              size: 'responsive',
              shape: 'pill',
              color: 'gold',
              tagline: false
            }
          })))
        }, {
          marker: {
            className: 'is-small',
            icon: 'fa-money-check-alt'
          },
          header: common.bankTransfer,
          children: /*#__PURE__*/_react["default"].createElement("div", {
            className: "bank-info"
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: "header"
          }, common.bank, ":"), /*#__PURE__*/_react["default"].createElement("span", null, "Vietcombank"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
            className: "header"
          }, common.branch, ":"), /*#__PURE__*/_react["default"].createElement("span", null, "Th\xE0nh C\xF4ng - H\xE0 N\u1ED9i"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
            className: "header"
          }, common.address, ":"), /*#__PURE__*/_react["default"].createElement("span", null, "198 Tran Quang Khai, Hanoi, Vietnam"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
            className: "header"
          }, common.accountHolder, ":"), /*#__PURE__*/_react["default"].createElement("span", null, "NGUYEN KY SON"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
            className: "header"
          }, common.accountNumber, ":"), /*#__PURE__*/_react["default"].createElement("span", null, "0021001176378"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
            className: "header"
          }, common.swiftCode, ":"), /*#__PURE__*/_react["default"].createElement("span", null, "BFTVVNVX"))
        }]
      }))), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: closeModal,
        className: "modal-close is-large has-background-grey-light",
        "aria-label": "close"
      }))) : null);
    }
  }]);

  return BuyButton;
}(_react.Component);

exports["default"] = BuyButton;