"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Canvas = _interopRequireDefault(require("./Canvas"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _Upload = _interopRequireDefault(require("./Upload"));

var _Button = _interopRequireDefault(require("./Button"));

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

    _defineProperty(_assertThisInitialized(_this), "state", {
      canvasWidth: 0,
      canvasHeight: 0
    });

    _defineProperty(_assertThisInitialized(_this), "saveWidth", 360);

    _defineProperty(_assertThisInitialized(_this), "saveHeight", 360);

    _defineProperty(_assertThisInitialized(_this), "modal", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "canvas", /*#__PURE__*/_react["default"].createRef());

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (typeof window !== 'undefined') {
        var _window = window,
            user = _window.user;

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var profilePicture;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return user.get('profile').get('picture');

                case 2:
                  profilePicture = _context.sent;
                  if (profilePicture) _this2.setState({
                    profilePictureRes: profilePicture
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var pageContext = this.props.pageContext;
      var common = pageContext.common;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.state.profilePictureRes ? /*#__PURE__*/_react["default"].createElement("figure", {
        className: "image is-128x128",
        style: {
          margin: '0 auto 0.75rem auto'
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: this.state.profilePictureRes,
        className: "is-rounded"
      })) : null, /*#__PURE__*/_react["default"].createElement(_Upload["default"], {
        pageContext: pageContext,
        callback: function callback(data) {
          _this3.setState({
            profilePictureSrc: data
          });

          _this3.modal.current.openModal();
        },
        className: "is-centered"
      }), /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
        pageContext: pageContext,
        ref: this.modal,
        callback: function callback(w, h) {
          var size = Math.min(w, h);
          if (size > 0) _this3.setState({
            canvasWidth: size,
            canvasHeight: size
          });
        },
        scrollBar: false,
        className: "has-text-centered",
        layout: "card",
        header: {
          title: common.profilePicture
        },
        body: {
          children: /*#__PURE__*/_react["default"].createElement(_Canvas["default"], {
            src: this.state.profilePictureSrc,
            ref: this.canvas,
            width: this.state.canvasWidth,
            height: this.state.canvasWidth,
            saveWidth: this.saveWidth,
            saveHeight: this.saveHeight,
            callback: function callback(data) {
              if (typeof window !== 'undefined') {
                var _window2 = window,
                    user = _window2.user;
                user.get('profile').get('picture').put(data);
              }

              _this3.setState({
                profilePictureRes: data
              });
            }
          })
        },
        footer: {
          children: /*#__PURE__*/_react["default"].createElement(_Button["default"], {
            className: "is-primary",
            onClick: function onClick() {
              _this3.canvas.current.save();

              _this3.modal.current.closeModal();
            },
            label: common.save
          })
        }
      }));
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;