"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _Layout = _interopRequireDefault(require("./Layout"));

var _DocHeader = _interopRequireDefault(require("../components/DocHeader"));

var _Children = _interopRequireDefault(require("../components/Children"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query($fileAbsolutePath: String!) {\n        markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {\n            html\n            frontmatter {\n                layout\n                date(formatString: \"MMMM DD, YYYY\")\n                slug\n                title\n                subtitle\n                description\n                sort\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var data = _ref.data,
      pageContext = _ref.pageContext;
  var markdownRemark = data.markdownRemark;
  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html;
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
  }, frontmatter.title), /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle is-4 has-text-weight-light"
  }, frontmatter.subtitle)))), /*#__PURE__*/_react["default"].createElement(_DocHeader["default"], {
    pageContext: pageContext
  }), html ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("article", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container is-divider",
    style: {
      margin: '0 auto'
    }
  })) : null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "section has-background-light"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-multiline"
  }, /*#__PURE__*/_react["default"].createElement(_Children["default"], {
    filter: {
      sort: frontmatter.sort
    },
    layout: "compact",
    className: "is-equal-height is-raised-on-hover",
    pageContext: pageContext,
    render: function render(data) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: data.key,
        className: "column is-half"
      }, data);
    }
  })))));
};

exports["default"] = _default;
var query = (0, _gatsby.graphql)(_templateObject());
exports.query = query;