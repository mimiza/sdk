"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = /*#__PURE__*/function (_Component) {
  _inherits(_default, _Component);

  var _super = _createSuper(_default);

  function _default() {
    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "canvas", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "mouseActive", false);

    _defineProperty(_assertThisInitialized(_this), "mousePos", {});

    _defineProperty(_assertThisInitialized(_this), "img", new Image());

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      _this.mouseActive = true;
      _this.mousePos = {
        x: e.clientX,
        y: e.clientY
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      _this.mouseActive = false;
      _this.mousePos = {};
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseMove", function (e) {
      if (_this.mouseActive) {
        var _mousePos = {
          x: e.clientX,
          y: e.clientY
        };
        if (_this.dw > _this.ctx.canvas.width) _this.dx = _this.dx + _mousePos.x - _this.mousePos.x;
        if (_this.dh > _this.ctx.canvas.height) _this.dy = _this.dy + _mousePos.y - _this.mousePos.y;

        _this.correct();

        _this.draw();

        _this.mousePos = {
          x: e.clientX,
          y: e.clientY
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onWheel", function (e) {
      var r;
      if (e.deltaY < 0) r = 1.1;
      if (e.deltaY > 0) r = 0.9;
      _this.dx *= r;
      _this.dy *= r;
      _this.dw *= r;
      _this.dh *= r;

      if (Math.min(_this.dw, _this.dh) < Math.max(_this.ctx.canvas.width, _this.ctx.canvas.height)) {
        _this.dw = _this.img.width * _this.r;
        _this.dh = _this.img.height * _this.r;
      }

      _this.correct();

      _this.draw();
    });

    _defineProperty(_assertThisInitialized(_this), "correct", function () {
      if (_this.dx > 0 || _this.dx === NaN) _this.dx = 0;
      if (_this.dw + _this.dx < _this.ctx.canvas.width) _this.dx = _this.ctx.canvas.width - _this.dw;
      if (_this.dy > 0 || _this.dy === NaN) _this.dy = 0;
      if (_this.dh + _this.dy < _this.ctx.canvas.height) _this.dy = _this.ctx.canvas.height - _this.dh;
      if (_this.dx === NaN || _this.dy === NaN || _this.dw === NaN || _this.dh === NaN) _this.reset();
    });

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      _this.r = Math.max(_this.ctx.canvas.width, _this.ctx.canvas.height) / Math.min(_this.img.width, _this.img.height);
      _this.dw = _this.img.width * _this.r;
      _this.dh = _this.img.height * _this.r;
      _this.dx = -(_this.dw - _this.ctx.canvas.width) / 2;
      _this.dy = -(_this.dh - _this.ctx.canvas.height) / 2;
    });

    _defineProperty(_assertThisInitialized(_this), "save", function () {
      if (_this.props.callback) {
        // resize before saving to Data URL
        if (_this.props.saveWidth && _this.props.saveHeight) {
          var _assertThisInitialize = _assertThisInitialized(_this),
              ctx = _assertThisInitialize.ctx;

          var r = Math.max(_this.props.saveWidth, _this.props.saveHeight) / Math.max(ctx.canvas.width, ctx.canvas.width);
          ctx.canvas.width = _this.props.saveWidth;
          ctx.canvas.height = _this.props.saveHeight;
          _this.dw *= r;
          _this.dh *= r;
          _this.dx *= r;
          _this.dy *= r;

          _this.draw();
        }

        var data = _this.canvas.current.toDataURL('image/jpeg', 0.5);

        _this.props.callback(data);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "draw", function (ctx, x, y, w, h) {
      ctx = ctx ? ctx : _this.img;
      x = x ? x : _this.dx;
      y = y ? y : _this.dy;
      w = w ? w : _this.dw;
      h = h ? h : _this.dh;
      _this.ctx.fillStyle = '#ffffff';

      _this.ctx.fillRect(0, 0, _this.ctx.canvas.width, _this.ctx.canvas.height);

      _this.ctx.drawImage(ctx, x, y, w, h);
    });

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ctx = this.canvas.current.getContext('2d');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = this.props.className;

      if (this.props.src) {
        var ctx = this.ctx,
            img = this.img;
        img.src = this.props.src;

        img.onload = function () {
          ctx.canvas.height = _this2.props.height;
          ctx.canvas.width = _this2.props.width;

          _this2.reset(); // ctx.drawImage(img, dx, dy, dw, dh)


          _this2.draw(img, _this2.dx, _this2.dy, _this2.dw, _this2.dh);
        };
      }

      return /*#__PURE__*/_react["default"].createElement("canvas", {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseMove: this.onMouseMove,
        onWheel: this.onWheel,
        ref: this.canvas
      });
    }
  }]);

  return _default;
}(_react.Component);

exports["default"] = _default;