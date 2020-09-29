"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _config = _interopRequireDefault(require("../../config"));

var _access = require("../services/access");

var _utils = require("../services/utils");

var _Form = _interopRequireDefault(require("../components/Form"));

var _Field = _interopRequireDefault(require("../components/Field"));

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

var defaultState = {
  processing: false
};

var SignUp = /*#__PURE__*/function (_Component) {
  _inherits(SignUp, _Component);

  var _super = _createSuper(SignUp);

  function SignUp() {
    var _this;

    _classCallCheck(this, SignUp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", defaultState);

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (formData) {
      var locale = _this.props.pageContext.locale;

      _this.setState({
        processing: true
      });

      if (typeof window !== 'undefined') {
        var firstName = formData.firstName,
            lastName = formData.lastName,
            username = formData.username,
            password = formData.password;
        var _window = window,
            Gun = _window.Gun,
            gun = _window.gun,
            user = _window.user;
        user.create(username, password, /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response) {
            var ref, referrer, rawData, signed, link;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!_this._mounted) _this.setState({
                      processing: false
                    });

                    if (!response.err) {
                      _context2.next = 5;
                      break;
                    }

                    (0, _utils.notify)(response.err, 'is-danger');
                    _context2.next = 18;
                    break;

                  case 5:
                    // Check if the new user is referred by someone else
                    ref = window.localStorage.getItem('ref');

                    if (!ref) {
                      _context2.next = 17;
                      break;
                    }

                    _context2.next = 9;
                    return gun.user(_config["default"].system.pub).get('referralCode').get(ref);

                  case 9:
                    referrer = _context2.sent;

                    if (!(typeof referrer !== 'undefined' && referrer.pub && referrer._ && referrer._['#'])) {
                      _context2.next = 17;
                      break;
                    }

                    // Send a signed message to the referrer
                    rawData = {
                      referrer: {
                        '#': referrer._['#']
                      },
                      referee: {
                        '#': "~".concat(user.is.pub)
                      },
                      referralCode: ref,
                      timestamp: Gun.state()
                    };
                    _context2.next = 14;
                    return (0, _utils.signAndHash)(rawData);

                  case 14:
                    signed = _context2.sent;
                    link = "message#".concat(referrer.pub);
                    if (signed.data && signed.hash) gun.get(link).get(signed.hash).put(signed.data);

                  case 17:
                    // If callback exist in user.create(), user.auth() won't fire, must auth manually
                    (0, _access.authenticate)(username, password, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      var rawData, signed;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return user.get('profile').put({
                                firstName: firstName,
                                lastName: lastName
                              });

                            case 2:
                              rawData = {
                                '#': "~".concat(user.is.pub)
                              };
                              _context.next = 5;
                              return (0, _utils.signAndHash)(rawData);

                            case 5:
                              signed = _context.sent;

                              if (!(signed.data && signed.hash)) {
                                _context.next = 9;
                                break;
                              }

                              _context.next = 9;
                              return gun.get('#user').get(signed.hash).put(signed.data);

                            case 9:
                              window.dispatchEvent(window.authenticated);
                              (0, _gatsby.navigate)("/".concat(locale, "/dashboard"));

                            case 11:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    })));

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }
    });

    return _this;
  }

  _createClass(SignUp, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this._mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var pageContext = this.props.pageContext;
      var common = pageContext.common;
      return /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        pageContext: pageContext,
        onSubmit: this.onSubmit,
        schema: [{
          placeholder: common.firstName,
          name: 'firstName',
          type: 'text',
          icon: {
            left: {
              icon: 'fas fa-user'
            }
          },
          required: true
        }, {
          placeholder: common.lastName,
          name: 'lastName',
          type: 'text',
          icon: {
            left: {
              icon: 'fas fa-user'
            }
          },
          required: true
        }, {
          placeholder: common.username,
          name: 'username',
          type: 'text',
          icon: {
            left: {
              icon: 'fas fa-user'
            }
          },
          required: true
        }, {
          placeholder: common.password,
          name: 'password',
          type: 'password',
          icon: {
            left: {
              icon: 'fas fa-ellipsis-h'
            }
          },
          required: true
        }, {
          label: common.signUpButton,
          name: 'signUp',
          type: 'button',
          className: 'is-primary is-fullwidth'
        }]
      });
    }
  }]);

  return SignUp;
}(_react.Component);

exports["default"] = SignUp;