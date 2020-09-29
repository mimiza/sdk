"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _gatsby = require("gatsby");

var _reactAsyncScriptLoader = _interopRequireDefault(require("react-async-script-loader"));

var _pixel = require("../services/pixel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var PaypalButton = /*#__PURE__*/function (_Component) {
  _inherits(PaypalButton, _Component);

  var _super = _createSuper(PaypalButton);

  function PaypalButton() {
    var _this;

    _classCallCheck(this, PaypalButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showButton: false
    });

    return _this;
  }

  _createClass(PaypalButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isScriptLoaded && this.props.isScriptLoadSucceed) {
        this.setState({
          showButton: true
        });
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var isLoadedButWasntLoadedBefore = !this.state.showButton && !this.props.isScriptLoaded && nextProps.isScriptLoaded;
      if (isLoadedButWasntLoadedBefore && nextProps.isScriptLoadSucceed) this.setState({
        showButton: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          data = _this$props.data,
          style = _this$props.style;
      var locale = pageContext.locale;
      var paypal = typeof window !== 'undefined' ? window.PAYPAL : null;
      var client = {
        sandbox: 'AWWlOPHsQqDs8p6EJicoPflcwbmL1k_SXbTLJzxgCLXqSswD3qPlTWDEZFgV2WSqDwLKZ-DL0WXxSGWh',
        production: 'ARh0oJd2MdclBD7DsGvBJIUaZWxjBrWN1P-E8C_OitBPmTjX_UYrU3-9hZCWPS8MQZH27YJqLxVFUn_Q'
      };
      var env = 'production';

      var buttonClicked = function buttonClicked() {
        return (0, _pixel.setPixel)(_objectSpread({
          event: 'PaypalButtonClicked'
        }, data));
      };

      var payment = function payment() {
        return paypal.rest.payment.create(env, client, {
          transactions: [{
            amount: {
              total: data.salePrice,
              currency: data.currency
            }
          }]
        });
      };

      var onAuthorize = function onAuthorize(_data, actions) {
        return actions.payment.execute().then(function () {
          (0, _pixel.setPixel)(_objectSpread(_objectSpread({
            event: 'paid'
          }, data), _data));
          (0, _gatsby.navigate)("/".concat(locale, "/payment/success?item=").concat(data.item));
        });
      };

      var onCancel = function onCancel(_data) {
        (0, _pixel.setPixel)(_objectSpread(_objectSpread({
          event: 'cancelled'
        }, data), _data));
        (0, _gatsby.navigate)("/".concat(locale, "/payment/cancelled?item=").concat(data.item));
      };

      var onError = function onError(_data) {
        return console.error(_data);
      };

      return this.state.showButton && paypal && /*#__PURE__*/_react["default"].createElement(paypal.Button.react, {
        onClick: buttonClicked,
        env: env,
        client: client,
        commit: true,
        payment: payment,
        onAuthorize: onAuthorize,
        onCancel: onCancel,
        onError: onError,
        style: style ? style : {
          //label: 'paypal', // checkout | credit | pay | buynow | paypal | installment
          //size: 'medium', // small | medium | large | responsive
          shape: 'pill',
          // pill | rect
          color: 'gold',
          // gold | blue | silver | black
          tagline: false
        }
      });
    }
  }]);

  return PaypalButton;
}(_react.Component);

var _default = (0, _reactAsyncScriptLoader["default"])('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);

exports["default"] = _default;