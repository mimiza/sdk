"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _Layout = _interopRequireDefault(require("./Layout"));

var _DocHeader = _interopRequireDefault(require("../components/DocHeader"));

var _Card = _interopRequireDefault(require("../components/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                                {\n                                    allSitePage(\n                                        sort: {\n                                            order: DESC\n                                            fields: context___order\n                                        }\n                                        filter: {\n                                            context: { tags: { ne: null } }\n                                        }\n                                    ) {\n                                        edges {\n                                            node {\n                                                id\n                                                path\n                                                context {\n                                                    fileAbsolutePath\n                                                    layout\n                                                    date\n                                                    locale\n                                                    title\n                                                    subtitle\n                                                    description\n                                                    keywords\n                                                    tags\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext;
  var locale = pageContext.locale,
      common = pageContext.common,
      tag = pageContext.tag;
  return /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    pageContext: pageContext
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "hero has-background-theme is-primary has-text-centered"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container content"
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "title is-2 has-text-weight-light is-spaced"
  }, common.tag, ": ", pageContext.header), /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle is-4 has-text-weight-light"
  }, pageContext.subheader)))), /*#__PURE__*/_react["default"].createElement(_DocHeader["default"], {
    pageContext: pageContext
  }), /*#__PURE__*/_react["default"].createElement("section", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-multiline"
  }, /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
    query: (0, _gatsby.graphql)(_templateObject()),
    render: function render(data) {
      return data.allSitePage.edges.filter(function (page) {
        return page.node.context && page.node.context.locale && page.node.context.locale === locale && page.node.context.tags.indexOf(tag) > -1;
      }).map(function (page) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: page.node.id,
          className: "column is-one-third"
        }, /*#__PURE__*/_react["default"].createElement(_Card["default"], {
          data: {
            to: page.node.path,
            header: page.node.context.title,
            description: page.node.context.description,
            date: page.node.context.date
          },
          pageContext: pageContext
        }));
      });
    }
  })))));
};

exports["default"] = _default;