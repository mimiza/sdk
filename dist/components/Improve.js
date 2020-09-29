"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                {\n                    allFile(filter: { extension: { in: [\"md\", \"json\"] } }) {\n                        edges {\n                            node {\n                                absolutePath\n                                publicURL\n                            }\n                        }\n                    }\n                }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var pageContext = _ref.pageContext,
      className = _ref.className;
  var common = pageContext.common,
      fileAbsolutePath = pageContext.fileAbsolutePath;
  return /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
    query: (0, _gatsby.graphql)(_templateObject()),
    render: function render(data) {
      var results = data.allFile.edges.filter(function (file) {
        return file.node && file.node.absolutePath && file.node.absolutePath === fileAbsolutePath;
      });
      if (results[0] && results[0].node) return /*#__PURE__*/_react["default"].createElement("a", {
        href: results[0].node.publicURL,
        target: "_blank",
        rel: "noreferrer",
        className: className || ''
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-edit"
      })), common.improveThisPage);
    }
  });
};

exports["default"] = _default;