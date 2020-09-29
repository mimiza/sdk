"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPixel = exports.searchPixel = exports.getPixel = exports.getParams = exports.getCookie = exports.setCookie = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var pixelName = '__pixel';

var setCookie = function setCookie(key, value, duration) {
  if (typeof window !== 'undefined') {
    var d = new Date();
    d.setTime(d.getTime() + duration * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    window.document.cookie = key + '=' + value + ';' + expires + ';path=/';
  }
};

exports.setCookie = setCookie;

var getCookie = function getCookie(key) {
  if (typeof window !== 'undefined') {
    var name = key + '=';
    var ca = window.document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substr(1);
      }

      if (c.indexOf(name) === 0) {
        return c.substr(name.length, c.length);
      }
    }
  }

  return '';
};

exports.getCookie = getCookie;

var getParams = function getParams() {
  if (typeof window !== 'undefined') {
    var items = window.location.search.substr(1).split('&');
    var result = {},
        tmp = [];

    for (var i = 0; i < items.length; i++) {
      tmp = items[i].split('=');
      if (tmp.length === 2) result[tmp[0]] = decodeURIComponent(tmp[1]);
    }

    return result;
  }

  return {};
};

exports.getParams = getParams;

var getPixel = function getPixel() {
  if (typeof window !== 'undefined') {
    var pixel = typeof Storage !== 'undefined' ? JSON.parse(window.localStorage.getItem(pixelName) || '[]') : getCookie(pixelName) !== '' ? JSON.parse(getCookie(pixelName)) : [];
    return pixel;
  }

  return [];
};

exports.getPixel = getPixel;

var searchPixel = function searchPixel(data) {
  if (typeof window !== 'undefined') {
    var keys = Object.keys(data);
    var pixel = getPixel().filter(function (item) {
      var state = false;

      for (var i = 0; i < keys.length; i++) {
        state = item[keys[i]] && data[keys[i]] && item[keys[i]] === data[keys[i]] ? true : false;
      }

      return state;
    });
    return pixel;
  }

  return [];
};

exports.searchPixel = searchPixel;

var setPixel = function setPixel(data) {
  if (typeof window !== 'undefined') {
    var url = window.location.href;
    data = data || getParams();

    if (data.event && url) {
      var chunk = _objectSpread({
        time: new Date().toUTCString(),
        url: url
      }, data);

      var pixel = getPixel();
      pixel.push(chunk);
      if (typeof Storage !== 'undefined') window.localStorage.setItem(pixelName, JSON.stringify(pixel));else setCookie(pixelName, JSON.stringify(pixel), 90);
    }
  }
};

exports.setPixel = setPixel;