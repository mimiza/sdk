"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _i18n = require("../services/i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                {\n                    allSitePage(\n                        sort: {\n                            order: ASC\n                            fields: [context___order, context___date]\n                        }\n                    ) {\n                        edges {\n                            node {\n                                path\n                                context {\n                                    order\n                                    title\n                                    locale\n                                    next\n                                    previous\n                                }\n                            }\n                        }\n                    }\n                }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext;
  return (
    /*#__PURE__*/
    // Generate previous and next links
    _react["default"].createElement(_gatsby.StaticQuery, {
      query: (0, _gatsby.graphql)(_templateObject()),
      render: function render(data) {
        var pagePath = pageContext.pagePath,
            locale = pageContext.locale,
            common = pageContext.common;

        var _data = data.allSitePage.edges.filter(function (page) {
          return page.node.path.replace(/\/[\w\-_]*\/?$/, '') === pagePath.replace(/\/[\w\-_]*\/?$/, '') && page.node.context.locale === locale;
        });

        var result = _data.map(function (page, index) {
          if (page.node.path === pagePath) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              className: "columns",
              key: index
            }, pageContext.previous || _data[index - 1] ? /*#__PURE__*/_react["default"].createElement("div", {
              className: "column"
            }, /*#__PURE__*/_react["default"].createElement("header", {
              className: "subtitle is-uppercase is-7"
            }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
              pageContext: pageContext,
              to: pageContext.previous ? "".concat(locale, "/").concat(pageContext.previous) : _data[index - 1].node.path
            }, "\u2190 ", common.previous)), /*#__PURE__*/_react["default"].createElement("header", {
              className: "title is-5"
            }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
              pageContext: pageContext,
              to: pageContext.previous ? "".concat(locale, "/").concat(pageContext.previous) : _data[index - 1].node.path
            }))) : null, pageContext.next || _data[index + 1] ? /*#__PURE__*/_react["default"].createElement("div", {
              className: "column has-text-right"
            }, /*#__PURE__*/_react["default"].createElement("header", {
              className: "subtitle is-uppercase is-7"
            }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
              pageContext: pageContext,
              to: pageContext.next ? "/".concat(locale, "/").concat(pageContext.next) : _data[index + 1].node.path
            }, common.next, " \u2192")), /*#__PURE__*/_react["default"].createElement("header", {
              className: "title is-5"
            }, /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
              pageContext: pageContext,
              to: pageContext.next ? "/".concat(locale, "/").concat(pageContext.next) : _data[index + 1].node.path
            }))) : null);
          }

          return null;
        });

        return result;
      }
    })
  );
};

exports["default"] = _default;