"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GlobalContextProvider = void 0;

var _gun = _interopRequireDefault(require("gun"));

require("gun/sea");

require("gun/lib/radix");

require("gun/lib/radisk");

require("gun/lib/store");

require("gun/lib/rindexed");

require("gun/nts");

var _react = _interopRequireWildcard(require("react"));

var _access = require("./access");

var _config = _interopRequireDefault(require("./../../config"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var defaultState = {
  authenticated: false,
  username: null,
  access: []
};

var GlobalContext = /*#__PURE__*/_react["default"].createContext(defaultState);

var GlobalContextProvider = /*#__PURE__*/function (_Component) {
  _inherits(GlobalContextProvider, _Component);

  var _super = _createSuper(GlobalContextProvider);

  function GlobalContextProvider(props) {
    var _this;

    _classCallCheck(this, GlobalContextProvider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", defaultState);

    if (window && !(window.gun || window.user || window.sea)) {
      // window.gun = Gun({
      //     peers: ['https://database-01.mimiza.com:8765/gun'],
      //     s3: {
      //         key: process.env.AWS_KEY,
      //         secret: process.env.AWS_SECRET,
      //         bucket: process.env.AWS_BUCKET,
      //     },
      // })
      window.gun = (0, _gun["default"])({
        peers: _config["default"].peers
      });
      window.user = window.gun.user();
      window.sea = _gun["default"].SEA;
      window.logOut = new CustomEvent('logOut');
      window.authenticated = new CustomEvent('authenticated');
      var url = new URL(window.location);
      var searchParams = url.searchParams;

      if (searchParams.has('ref') && !window.localStorage.getItem('ref')) {
        window.localStorage.setItem('ref', searchParams.get('ref'));
      }
    }

    return _this;
  }

  _createClass(GlobalContextProvider, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this._mounted = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (typeof window !== 'undefined') {
        var _window = window,
            gun = _window.gun,
            user = _window.user,
            authenticated = _window.authenticated;
        window.addEventListener('logOut', function () {
          _this2.setState(defaultState);
        });
        window.addEventListener('authenticated', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (user.is) {
                    _this2.setState({
                      authenticated: true,
                      access: (0, _access.access)(user.is)
                    });

                    user.get('profile').map().on(function (data, key) {
                      if (_this2._mounted) _this2.setState(_defineProperty({}, key, data));
                    });
                  }

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
        gun.on('auth', function (ack) {
          if (ack.err) console.error(ack.err);else if (user.is && user._.sea) window.dispatchEvent(authenticated);
        });
        if (localStorage.getItem('pair')) sessionStorage.setItem('pair', localStorage.getItem('pair'));
        user.recall({
          sessionStorage: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
      if (typeof window !== 'undefined') window.removeEventListener('authenticated', null);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(GlobalContext.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return GlobalContextProvider;
}(_react.Component);

exports.GlobalContextProvider = GlobalContextProvider;
var _default = GlobalContext;
exports["default"] = _default;