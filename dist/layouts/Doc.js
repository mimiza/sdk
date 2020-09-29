"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _Layout = _interopRequireDefault(require("./Layout"));

var _DocHeader = _interopRequireDefault(require("../components/DocHeader"));

var _TableOfContents = _interopRequireDefault(require("../components/TableOfContents"));

var _Divider = _interopRequireDefault(require("../components/Divider"));

var _Tags = _interopRequireDefault(require("../components/Tags"));

var _DocFooter = _interopRequireDefault(require("../components/DocFooter"));

var _Ads = _interopRequireDefault(require("../components/Ads"));

var _SocialButtons = _interopRequireDefault(require("../components/SocialButtons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query($fileAbsolutePath: String!) {\n        markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {\n            html\n            frontmatter {\n                layout\n                date(formatString: \"MMMM DD, YYYY\")\n                slug\n                title\n                subtitle\n                description\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var data = _ref.data,
      pageContext = _ref.pageContext;
  var common = pageContext.common,
      tags = pageContext.tags,
      image = pageContext.image;
  var markdownRemark = data.markdownRemark;
  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html;
  return /*#__PURE__*/_react["default"].createElement(_Layout["default"], {
    pageContext: pageContext
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: 'hero is-primary has-text-centered' + (image ? '' : ' has-background-theme'),
    style: image ? {
      background: "url(\"".concat(image, "\") no-repeat center center"),
      backgroundSize: 'cover'
    } : {}
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hero-body",
    style: {
      background: 'rgba(0,0,0,.5)'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container",
    style: {
      maxWidth: 960
    }
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "title is-2 has-text-weight-bold is-spaced",
    style: {
      textShadow: '0px 0px 10px rgba(0,0,0,1)'
    }
  }, frontmatter.title), /*#__PURE__*/_react["default"].createElement("header", {
    className: "subtitle is-4 has-text-weight-light"
  }, frontmatter.subtitle), /*#__PURE__*/_react["default"].createElement(_Divider["default"], {
    className: "is-tiny is-centered is-primary"
  }), /*#__PURE__*/_react["default"].createElement("time", {
    className: "is-size-7",
    dateTime: frontmatter.date
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "icon is-small"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fas fa-clock"
  })), ' ', common.lastUpdated, ": ", frontmatter.date)))), /*#__PURE__*/_react["default"].createElement(_DocHeader["default"], {
    pageContext: pageContext
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "columns is-gapless",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column has-background-light is-one-fifth"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react["default"].createElement(_TableOfContents["default"], {
    pageContext: pageContext
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement("article", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }), /*#__PURE__*/_react["default"].createElement(_SocialButtons["default"], {
    pageContext: pageContext
  }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Tags["default"], {
    data: tags,
    pageContext: pageContext
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "is-divider"
  }), /*#__PURE__*/_react["default"].createElement(_DocFooter["default"], {
    pageContext: pageContext
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "column has-background-light is-one-fifth"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "section"
  }, /*#__PURE__*/_react["default"].createElement(_Ads["default"], {
    pageContext: pageContext
  })))));
};

exports["default"] = _default;
var query = (0, _gatsby.graphql)(_templateObject());
exports.query = query;