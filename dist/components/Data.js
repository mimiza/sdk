"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../services/utils");

var _Block = _interopRequireDefault(require("./Block"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _Form = _interopRequireDefault(require("./Form"));

var _Card = _interopRequireDefault(require("./Card"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var _default = /*#__PURE__*/_react["default"].memo((_temp = /*#__PURE__*/function (_Component) {
  _inherits(_temp, _Component);

  var _super = _createSuper(_temp);

  function _temp(props) {
    var _this;

    _classCallCheck(this, _temp);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_mounted", false);

    _defineProperty(_assertThisInitialized(_this), "layout", {});

    _defineProperty(_assertThisInitialized(_this), "state", {
      formContext: {},
      data: {},
      options: {}
    });

    _defineProperty(_assertThisInitialized(_this), "modal", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "loadData", function (item) {
      if (typeof window !== 'undefined' && _this._mounted && item.data && item.key) {
        var _window = window,
            sea = _window.sea;
        var data = _this.state.data;
        var key = _typeof(item.key) === 'object' ? JSON.stringify(item.key) : item.key;

        _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _, _data;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!/#/gi.test(_this.props.path)) {
                    _context.next = 12;
                    break;
                  }

                  _context.prev = 1;
                  _ = JSON.parse(item.data) || {};

                  if (!(_ && _.user && _.user.pub)) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 6;
                  return sea.verify(_.data, _.user);

                case 6:
                  _data = _context.sent;
                  if (_data) item.data = _data;

                case 8:
                  _context.next = 12;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](1);

                case 12:
                  data[key] = item;

                  _this.setState({
                    data: data
                  });

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 10]]);
        }))();
      } else if (_typeof(item) === 'object' && Object.keys(item).length > 1) {
        _this.setState({
          data: item
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addData", function () {
      _this.setState({
        context: 'addData',
        formContext: {}
      });

      _this.modal.current.openModal();
    });

    _defineProperty(_assertThisInitialized(_this), "viewData", function (item) {
      if (_this.props.schema.length) {
        var state = {
          context: 'viewData'
        };
        if (item) state.formContext = item;

        _this.setState(state);

        _this.modal.current.openModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "presentData", function (item) {
      var schema = _this.props.schema;
      var options = _this.state.options;
      var layout = {}; // check for 'layout' field in each item for presentation

      schema.map(function (field) {
        var group = field.name,
            _ = item.data[group];

        if (group && typeof _ !== 'undefined' && field.layout) {
          // a position is where the field value is presented
          field.layout.map(function (position) {
            var value = ['select'].indexOf(field.type) > -1 && field.link && options[group] && options[group][_] ? options[group][_] : _;
            layout[position] = typeof layout[position] === 'string' && typeof value === 'string' ? "".concat(layout[position], " ").concat(value) : value;
          });
        }
      });
      return layout;
    });

    _defineProperty(_assertThisInitialized(_this), "deleteData", function () {
      if (typeof window !== 'undefined' && _this.state.formContext && _this.state.formContext.key) _this.scope.get(_this.state.formContext.key).put(null);

      _this.setState({
        formContext: {}
      });

      _this.modal.current.closeModal();
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (formData) {
      if (typeof window !== 'undefined') {
        // if formContext exists, update data
        if (_this.state.formContext.key && _this.scope) {
          _this.scope.get(_this.state.formContext.key).put(formData);
        } // if path is immutable, hash the data
        else if (_this.props.path && /#/gi.test(_this.props.path)) {
            if (_typeof(formData) === 'object') {
              formData = JSON.stringify(formData);

              _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _hash;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0, _utils.hash)(formData);

                      case 2:
                        _hash = _context2.sent;

                        _this.scope.get(_hash).put(formData);

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }))();
            }
          } // nothing else, save new data
          else if (_this.scope) _this.scope.set(formData);

        _this.loadData({
          key: _this.state.formContext.key,
          data: formData
        });

        _this.setState({
          formContext: {}
        });

        _this.modal.current.closeModal();
      }

      if (_this.props.onSubmit) _this.props.onSubmit(formData);
    });

    if (!_this.props.schema) _this.props.schema = [];

    if (typeof window !== 'undefined') {
      if (_this.props.path) {
        var _window2 = window,
            gun = _window2.gun,
            user = _window2.user;
        _this.scope = _this.props.namespace === 'gun' || /#/gi.test(_this.props.path) ? gun.get(_this.props.path) : user.get(_this.props.path); // For "Select" and "Checkbox" fields, we create Options state to translate their values (which are actually keys) into names

        _this.props.schema.filter(function (item) {
          return item.type && ['checkbox', 'select'].indexOf(item.type) > -1;
        }).map(function (item) {
          var options = _this.state.options || {};

          if (item.link) {
            gun.get(item.link).map().once(function (data, key) {
              if (data) {
                if (!options[item.name]) options[item.name] = {};
                if (!options[item.name][key]) options[item.name][key] = data.name;
              }
            }).then(function () {
              if (_this._mounted && !options[item.name]) _this.setState({
                options: options
              });
            });
          } else if (item.options) {
            item.options.map(function (data) {
              if (!options[item.name]) options[item.name] = {};
              if (!options[item.name][data.value]) options[item.name][data.value] = data.text;
            });
            if (_this._mounted) _this.setState({
              options: options
            });
          }
        });
      } // Put the fields into the right places


      _this.props.schema.map(function (field) {
        if (field.layout) {
          field.layout.map(function (position) {
            _this.layout[position] = _this.layout[position] || [];

            _this.layout[position].push(field);
          });
        }
      });
    }

    return _this;
  }

  _createClass(_temp, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this._mounted = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (typeof window !== 'undefined' && window.location.pathname.replace(/\/*?$/gi, '') === this.props.pageContext.pagePath && this.scope) {
        if (this.props.callback) this.props.callback(this.scope);else this.scope.map().once(function (data, key) {
          if (data) _this2.loadData({
            data: data,
            key: key
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false; // if (
      //     typeof window !== 'undefined' &&
      //     window.location.pathname.replace(/\/*?$/gi, '') ===
      //         this.props.pageContext.pagePath
      // )
      //     this.scope.off()
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          _this$props$schema = _this$props.schema,
          schema = _this$props$schema === void 0 ? [] : _this$props$schema,
          hasForm = _this$props.hasForm,
          header = _this$props.header,
          footer = _this$props.footer;
      var types = {
        submit: 'Button',
        reset: 'Button',
        button: 'Button'
      };
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'level' + (header && header.className ? " ".concat(header.className) : '')
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "level-left"
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "level-right"
      }, this.layout.navigator ? this.layout.navigator.map(function (item) {
        return types[item.type] ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "level-item"
        }, /*#__PURE__*/_react["default"].createElement(_Block["default"], _extends({
          component: types[item.type]
        }, item))) : null;
      }) : null)), hasForm ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
        pageContext: pageContext,
        ref: this.modal,
        onClose: function onClose() {
          return _this3.setState({
            context: null,
            formContext: {}
          });
        }
      }, this._mounted ? /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        pageContext: pageContext,
        formContext: this.state.formContext,
        schema: schema,
        onSubmit: this.onSubmit
      }, this.layout.form ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "field is-grouped"
      }, this.layout.form.map(function (item) {
        return !item.context || item.context && item.context.indexOf(_this3.state.context) > -1 ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "control"
        }, /*#__PURE__*/_react["default"].createElement(_Block["default"], _extends({
          component: types[item.type]
        }, item))) : null;
      })) : null) : null)) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "columns is-multiline"
      }, Object.entries(this.state.data).map(function (item) {
        return _this3.props.render ? _this3.props.render(item[1]) : /*#__PURE__*/_react["default"].createElement(_Card["default"], {
          pageContext: pageContext,
          key: item[0],
          data: _this3.presentData(item[1]),
          headerNav: _this3.layout.headerNav ? /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
            className: "is-right",
            trigger: {
              className: 'is-small is-white has-text-grey',
              icon: {
                className: 'is-small',
                left: {
                  icon: 'fas fa-ellipsis-v'
                }
              }
            }
          }, _this3.layout.headerNav.map(function (_item) {
            return /*#__PURE__*/_react["default"].createElement("a", _extends({}, _item, {
              onClick: function onClick() {
                if (_item.onClick) _item.onClick(item[1]);
              }
            }), _item.label);
          })) : null,
          footerNav: _this3.layout.footerNav ? _this3.layout.footerNav.map(function (_item) {
            return /*#__PURE__*/_react["default"].createElement("a", _extends({}, _item, {
              onClick: function onClick() {
                if (_item.onClick) _item.onClick(item[1]);
              }
            }), _item.label);
          }) : null,
          render: function render(_item) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "column is-one-quarter"
            }, _item);
          }
        });
      })));
    }
  }]);

  return _temp;
}(_react.Component), _temp));

exports["default"] = _default;