"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmartLink = exports.getLocale = exports.redirect = exports.createPath = exports.defaultLocale = exports.siteLocales = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                {\n                    allSitePage {\n                        edges {\n                            node {\n                                path\n                                context {\n                                    title\n                                }\n                            }\n                        }\n                    }\n                }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var siteLocales = require('../locales/locales');

exports.siteLocales = siteLocales;
var defaultLocale = siteLocales.filter(function (locale) {
  return locale["default"];
})[0];
exports.defaultLocale = defaultLocale;

var createPath = function createPath(locale, path) {
  return "/".concat(locale) + path.replace(/(\/\w{2})($|\/.*)/g, '$2').replace(/\/$/g, '');
};

exports.createPath = createPath;

var redirect = function redirect() {
  if (typeof window !== 'undefined') {
    var pathLocale = getLocale(window.location.pathname);
    localStorage.locale = localStorage.locale || pathLocale || defaultLocale.code;

    if (!pathLocale) {
      var path = createPath(localStorage.locale, window.location.pathname + window.location.search);
      (0, _gatsby.navigate)(path);
    }
  }
};

exports.redirect = redirect;

var getLocale = function getLocale(path) {
  var pathLocale = path.replace(/(\/)(\w{2})($|\/.*)/g, '$2').replace(/[\W\d]/g, '');
  if (siteLocales.filter(function (locale) {
    return locale.code === pathLocale;
  }).length > 0) return pathLocale;
  return null;
};

exports.getLocale = getLocale;

var SmartLink = function SmartLink(_ref) {
  var pageContext = _ref.pageContext,
      to = _ref.to,
      className = _ref.className,
      children = _ref.children,
      _render = _ref.render,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
    query: (0, _gatsby.graphql)(_templateObject()),
    render: function render(data) {
      var newPath = pageContext && pageContext.locale ? createPath(pageContext.locale, to) : null;
      var defaultPath = createPath(defaultLocale.code, to);
      var finalPath = newPath; // check if newPath matches

      var _data = data.allSitePage.edges.filter(function (page) {
        return page.node.path === newPath;
      });

      var finalTitle = _data[0] ? _data[0].node.context.title : null; // newPath doesnt match

      if (_data.length === 0) {
        // check if defaultPath matches
        _data = data.allSitePage.edges.filter(function (page) {
          return page.node.path === defaultPath;
        });

        if (_data.length > 0) {
          finalPath = defaultPath;
          finalTitle = _data[0].node.context.title;
        } // nothing matches, fallback to the input value
        else {
            finalPath = to;
            finalTitle = children;
          }
      }

      var result = finalPath && (children || finalTitle) ? /*#__PURE__*/_react["default"].createElement(_gatsby.Link, {
        to: finalPath,
        className: (pageContext && pageContext.pagePath && finalPath === pageContext.pagePath ? 'is-active' : '') + (className ? " ".concat(className) : ''),
        onClick: onClick
      }, children || finalTitle) : null;

      if (_render && result) {
        return _render(result);
      }

      if (result) return result;
    }
  });
};

exports.SmartLink = SmartLink;