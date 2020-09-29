"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _gatsby = require("gatsby");

var _Header = _interopRequireDefault(require("../components/Header"));

var _Footer = _interopRequireDefault(require("../components/Footer"));

var _Notifications = _interopRequireDefault(require("../components/Notifications"));

require("./layout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                query {\n                    site {\n                        siteMetadata {\n                            title\n                            description\n                            keywords\n                        }\n                    }\n                }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext,
      children = _ref.children,
      settings = _ref.settings;
  var title = pageContext.title,
      subtitle = pageContext.subtitle,
      description = pageContext.description,
      keywords = pageContext.keywords,
      locale = pageContext.locale;
  return /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
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
          content: 'width=device-width, initial-scale=1'
        }]
      }, /*#__PURE__*/_react["default"].createElement("html", {
        lang: locale,
        className: "has-navbar-fixed-top"
      })), !settings || settings && (typeof settings.header === 'undefined' || settings.header === true) ? /*#__PURE__*/_react["default"].createElement(_Header["default"], {
        pageContext: pageContext,
        siteTitle: data.site.siteMetadata.title
      }) : null, children, !settings || settings && (typeof settings.footer === 'undefined' || settings.footer === true) ? /*#__PURE__*/_react["default"].createElement(_Footer["default"], {
        pageContext: pageContext,
        siteTitle: data.site.siteMetadata.title
      }) : null, /*#__PURE__*/_react["default"].createElement(_Notifications["default"], {
        pageContext: pageContext
      }));
    }
  });
};

exports["default"] = _default;