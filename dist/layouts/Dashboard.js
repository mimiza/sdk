"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _i18n = require("../services/i18n");

var _context = _interopRequireDefault(require("../services/context"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _gatsby = require("gatsby");

var _DashboardHeader = _interopRequireDefault(require("../components/DashboardHeader"));

var _DashboardFooter = _interopRequireDefault(require("../components/DashboardFooter"));

var _Notifications = _interopRequireDefault(require("../components/Notifications"));

require("./layout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                    query {\n                        site {\n                            siteMetadata {\n                                title\n                                description\n                                keywords\n                            }\n                        }\n                    }\n                "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _super.apply(this, arguments);
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var _this$props$pageConte = this.props.pageContext,
          locale = _this$props$pageConte.locale,
          pagePath = _this$props$pageConte.pagePath;

      if (typeof window !== 'undefined') {
        setTimeout(function () {
          if (!_this.context.authenticated || !(_this.context.authenticated && _this.context.access.filter(function (item) {
            return /^(?!_).*$/.test(item);
          }).map(function (item) {
            return (0, _i18n.createPath)(locale, item);
          }).indexOf(pagePath) > -1)) (0, _gatsby.navigate)('/');
        }, 2000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          pageContext = _this$props.pageContext,
          children = _this$props.children,
          settings = _this$props.settings;
      var title = pageContext.title,
          subtitle = pageContext.subtitle,
          description = pageContext.description,
          keywords = pageContext.keywords,
          locale = pageContext.locale,
          pagePath = pageContext.pagePath;
      return this.context.authenticated && this.context.access.filter(function (item) {
        return /^(?!_).*$/.test(item);
      }).map(function (item) {
        return (0, _i18n.createPath)(locale, item);
      }).indexOf(pagePath) > -1 && typeof window !== 'undefined' ? /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
        query: (0, _gatsby.graphql)(_templateObject()),
        render: function render(data) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactHelmet["default"], {
            title: title ? "".concat(title).concat(subtitle ? ' - ' + subtitle : '', " | ").concat(data.site.siteMetadata.title) : data.site.siteMetadata.title,
            meta: [{
              name: 'description',
              content: description || data.site.siteMetadata.description
            }, {
              name: 'keywords',
              content: keywords || data.site.siteMetadata.keywords
            }, {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
            }]
          }, /*#__PURE__*/_react["default"].createElement("html", {
            lang: locale,
            className: "has-navbar-fixed-top"
          })), !settings || settings && (typeof settings.header === 'undefined' || settings.header === true) ? /*#__PURE__*/_react["default"].createElement(_DashboardHeader["default"], {
            pageContext: pageContext,
            siteTitle: data.site.siteMetadata.title
          }) : null, children, !settings || settings && (typeof settings.footer === 'undefined' || settings.footer === true) ? /*#__PURE__*/_react["default"].createElement(_DashboardFooter["default"], {
            pageContext: pageContext,
            siteTitle: data.site.siteMetadata.title
          }) : null, /*#__PURE__*/_react["default"].createElement(_Notifications["default"], {
            pageContext: pageContext
          }));
        }
      }) : null;
    }
  }]);

  return Dashboard;
}(_react.Component);

exports["default"] = Dashboard;

_defineProperty(Dashboard, "contextType", _context["default"]);