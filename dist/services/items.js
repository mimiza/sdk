"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchItem = exports.getItem = exports["default"] = void 0;

var _items = _interopRequireDefault(require("./items.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _items["default"];
exports["default"] = _default;

var getItem = function getItem(data) {
  data = data || {};
  var keys = Object.keys(data);

  var result = _items["default"].filter(function (item) {
    var state = false;

    for (var i = 0; i < keys.length; i++) {
      state = item[keys[i]] && data[keys[i]] && item[keys[i]] === data[keys[i]] ? true : false;
    }

    return state;
  });

  return result[0] || {};
};

exports.getItem = getItem;

var searchItem = function searchItem(data) {
  data = data || {};
  var keys = Object.keys(data);

  var result = _items["default"].filter(function (item) {
    var state = false;

    for (var i = 0; i < keys.length; i++) {
      state = item[keys[i]] && data[keys[i]] && item[keys[i]] === data[keys[i]] ? true : false;
    }

    return state;
  });

  return result;
};

exports.searchItem = searchItem;