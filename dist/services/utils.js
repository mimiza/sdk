"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spintax = exports.encodeQuery = exports.signAndHash = exports.hash = exports.notify = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var notify = function notify(content, className) {
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('notification', {
    detail: {
      content: content,
      className: className
    }
  }));
};

exports.notify = notify;

var hash = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    var _window, sea;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof window !== 'undefined')) {
              _context.next = 6;
              break;
            }

            _window = window, sea = _window.sea;
            if (_typeof(data) === 'object') data = JSON.stringify(data);
            _context.next = 5;
            return sea.work(data, null, null, {
              name: 'SHA-256'
            });

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function hash(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.hash = hash;

var signAndHash = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    var _window2, sea, user, signedData, _;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(typeof window !== 'undefined')) {
              _context2.next = 13;
              break;
            }

            _window2 = window, sea = _window2.sea, user = _window2.user;

            if (!(user.is && user._ && user._.sea)) {
              _context2.next = 12;
              break;
            }

            _context2.next = 5;
            return sea.sign(data, user._.sea);

          case 5:
            signedData = _context2.sent;
            _ = JSON.stringify({
              data: signedData,
              user: {
                pub: user.is.pub
              }
            });
            _context2.t0 = _;
            _context2.next = 10;
            return hash(_);

          case 10:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", {
              data: _context2.t0,
              hash: _context2.t1
            });

          case 12:
            return _context2.abrupt("return", {});

          case 13:
            return _context2.abrupt("return", {});

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signAndHash(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signAndHash = signAndHash;

var encodeQuery = function encodeQuery(data) {
  return Object.entries(data).map(function (_) {
    return _.map(function (__) {
      return _typeof(__) === 'object' ? encodeURIComponent(JSON.stringify(__)) : encodeURIComponent(__);
    }).join('=');
  }).join('&');
};

exports.encodeQuery = encodeQuery;

var spintax = function spintax(text) {
  var matches, options, random;

  while ((matches = /{([^{}]+?)}/.exec(text)) !== null) {
    options = matches[1].split('|');
    random = Math.floor(Math.random() * options.length);
    text = text.replace(matches[0], options[random]);
  }

  return text;
};

exports.spintax = spintax;