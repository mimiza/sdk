"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.logOut = exports.authenticate = exports.signUp = exports.access = void 0;

var _access = _interopRequireDefault(require("./access.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var access = function access(key) {
  var user = _access["default"].users.filter(function (user) {
    return user.key && user.key.pub && user.key.epub && user.key.pub === key.pub && user.key.epub === key.epub;
  })[0];

  var roles = user && user.roles || ['customer'];
  var permissions = [];

  if (roles) {
    for (var path in _access["default"].permissions) {
      var _iterator = _createForOfIteratorHelper(roles),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var role = _step.value;
          if (_access["default"].permissions[path].indexOf(role) !== -1 && permissions.indexOf(path) === -1) permissions.push(path);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  return permissions;
};

exports.access = access;

var signUp = function signUp(data, callback) {
  if (typeof window !== 'undefined') {
    var _window = window,
        user = _window.user;

    if (data.username && data.password && callback) {
      user.create(data.username, data.password, function (response) {
        callback(response);
        if (!response.err) window.dispatchEvent(window.authenticated);
      });
    }
  }
};

exports.signUp = signUp;

var authenticate = function authenticate() {
  if (typeof window !== 'undefined') {
    var _window2 = window,
        user = _window2.user,
        authenticated = _window2.authenticated;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var credentials = typeof args[0] === 'string' && typeof args[1] === 'string' ? [args[0], args[1]] : _typeof(args[0]) === 'object' ? [args[0]] : [];
    var callback = args && args.length > 1 ? args.filter(function (arg) {
      return typeof arg === 'function';
    })[0] : null;
    var options = args && args.length > 2 && _typeof(args[args.length - 1]) === 'object' ? args[args.length - 1] : {};
    user.auth.apply(user, credentials.concat([function (response) {
      if (callback) callback(response);
      if (response.err) console.error(response);else {
        if (options.remember === true && typeof window !== 'undefined') {
          var _window3 = window,
              _user = _window3.user;
          if (_user._.sea) localStorage.setItem('pair', JSON.stringify(_user._.sea));
        }

        window.dispatchEvent(authenticated);
      }
    }, {
      remember: true
    }]));
  }
};

exports.authenticate = authenticate;

var logOut = function logOut(callback) {
  if (typeof window !== 'undefined') {
    window.user.leave();
    localStorage.removeItem('pair');
    window.dispatchEvent(window.logOut);
    if (callback) callback();
  }
};

exports.logOut = logOut;

var changePassword = function changePassword(password, callback) {
  if (typeof window !== 'undefined') {
    var _window4 = window,
        user = _window4.user;
    user.auth(user._.sea, password, function (response) {
      if (callback) callback(response);
    }, {
      change: password,
      remember: true
    });
  }
};

exports.changePassword = changePassword;