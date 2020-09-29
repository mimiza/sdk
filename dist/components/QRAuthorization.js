"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Section = _interopRequireDefault(require("../components/Section"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Scanner = /*#__PURE__*/_react["default"].lazy(function () {
  return typeof window !== 'undefined' ? Promise.resolve().then(function () {
    return _interopRequireWildcard(require('react-qr-scanner'));
  }) : '';
});

var defaultState = {
  data: '',
  status: null,
  scanning: false
};

var Scan = /*#__PURE__*/function (_Component) {
  _inherits(Scan, _Component);

  var _super = _createSuper(Scan);

  function Scan() {
    var _this;

    _classCallCheck(this, Scan);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", defaultState);

    _defineProperty(_assertThisInitialized(_this), "handleScan", function (data) {
      if (typeof window !== 'undefined' && data) {
        var _window = window,
            gun = _window.gun;

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var request;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return gun.get(data).get('request').once();

                case 2:
                  request = _context.sent;

                  if (request && request.pub && request.epub && request.userAgent) {
                    _this.setState({
                      address: data,
                      data: request
                    });
                  }

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function (error) {
      console.error(error);
    });

    _defineProperty(_assertThisInitialized(_this), "allowAccess", function () {
      if (typeof window !== 'undefined' && _this.state.address && _this.state.data && _this.state.data.pub && _this.state.data.epub && _this.state.data.userAgent) {
        var _window2 = window,
            gun = _window2.gun,
            sea = _window2.sea,
            user = _window2.user;

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var pair, key;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return sea.pair();

                case 2:
                  pair = _context2.sent;
                  _context2.t0 = sea;
                  _context2.t1 = sea;
                  _context2.t2 = JSON.stringify(user._.sea);
                  _context2.next = 8;
                  return sea.secret(_this.state.data.epub, pair);

                case 8:
                  _context2.t3 = _context2.sent;
                  _context2.next = 11;
                  return _context2.t1.encrypt.call(_context2.t1, _context2.t2, _context2.t3);

                case 11:
                  _context2.t4 = _context2.sent;
                  _context2.t5 = pair;
                  _context2.next = 15;
                  return _context2.t0.sign.call(_context2.t0, _context2.t4, _context2.t5);

                case 15:
                  key = _context2.sent;
                  _context2.next = 18;
                  return gun.get(_this.state.address).get('response').put({
                    pub: pair.pub,
                    epub: pair.epub,
                    key: key
                  });

                case 18:
                  _this.setState(defaultState);

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      }
    });

    return _this;
  }

  _createClass(Scan, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var pageContext = this.props.pageContext;
      var common = pageContext.common,
          dictionary = pageContext.dictionary;
      return typeof window !== 'undefined' ? !this.state.data ? /*#__PURE__*/_react["default"].createElement(_react.Suspense, null, /*#__PURE__*/_react["default"].createElement(Scanner, {
        className: "scanner",
        delay: 10,
        onError: this.handleError,
        onScan: this.handleScan
      })) : this.state.status === null ? /*#__PURE__*/_react["default"].createElement(_Section["default"], {
        pageContext: pageContext,
        className: "has-text-centered",
        data: {
          header: common.authorization,
          subheader: dictionary.authorizationDescription,
          description: this.state.data.userAgent
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "buttons is-centered"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.allowAccess,
        className: "button is-primary"
      }, common.allow), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: function onClick() {
          return _this2.setState(defaultState);
        },
        className: "button"
      }, common.deny))) : null : null;
    }
  }]);

  return Scan;
}(_react.Component);

exports["default"] = Scan;