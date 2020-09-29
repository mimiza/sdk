"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _i18n = require("../services/i18n");

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                {\n                    allSitePage(\n                        sort: { order: DESC, fields: context___order }\n                    ) {\n                        edges {\n                            node {\n                                id\n                                path\n                                context {\n                                    fileAbsolutePath\n                                    layout\n                                    date\n                                    locale\n                                    title\n                                    subtitle\n                                    description\n                                    keywords\n                                    image\n                                    links {\n                                        registration\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default(_ref) {
  var match = _ref.match,
      filter = _ref.filter,
      layout = _ref.layout,
      pageContext = _ref.pageContext,
      children = _ref.children,
      className = _ref.className,
      _render = _ref.render;
  return /*#__PURE__*/_react["default"].createElement(_gatsby.StaticQuery, {
    query: (0, _gatsby.graphql)(_templateObject()),
    render: function render(data) {
      var pagePath = pageContext.pagePath,
          locale = pageContext.locale; // find match, or only find direct children

      var pattern = new RegExp(match || '^' + pagePath + '/((?!/).)*$');
      var results = data.allSitePage.edges.filter(function (page) {
        return page.node.context && page.node.context.locale && page.node.context.locale === locale && page.node.path.match(pattern, 'g');
      });

      if (filter) {
        if (filter.layout) results = results.filter(function (page) {
          return filter.layout.indexOf(page.node.context.layout) > -1;
        });
        if (filter.sort === 'ASC') results = results.reverse();
        if (filter.limit) results = results.slice(0, filter.limit);
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, results.map(function (page) {
        var result;

        switch (layout) {
          case 'link':
            result = /*#__PURE__*/_react["default"].createElement(_i18n.SmartLink, {
              to: page.node.path,
              className: className,
              key: page.node.id,
              pageContext: pageContext
            }, page.node.context.title);
            break;

          case 'compact':
            result = /*#__PURE__*/_react["default"].createElement(_Card["default"], {
              data: {
                to: page.node.path,
                links: page.node.context.links,
                header: page.node.context.title,
                subheader: page.node.context.subtitle,
                image: page.node.context.image
              },
              pageContext: pageContext,
              className: className,
              key: page.node.id
            });
            break;

          default:
            result = /*#__PURE__*/_react["default"].createElement(_Card["default"], {
              data: {
                to: page.node.path,
                links: page.node.context.links,
                header: page.node.context.title,
                subheader: page.node.context.subtitle,
                description: page.node.context.description,
                date: page.node.context.date,
                image: page.node.context.image
              },
              pageContext: pageContext,
              className: className,
              key: page.node.id
            });
        }

        return _render ? _render(result) : result;
      }), children);
    }
  });
};

exports["default"] = _default;