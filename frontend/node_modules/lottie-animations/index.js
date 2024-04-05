"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lottieWeb = _interopRequireDefault(require("lottie-web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var WebLottie = /*#__PURE__*/function (_React$Component) {
  _inherits(WebLottie, _React$Component);

  var _super = _createSuper(WebLottie);

  function WebLottie() {
    _classCallCheck(this, WebLottie);

    return _super.apply(this, arguments);
  }

  _createClass(WebLottie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          options = _this$props.options,
          eventListeners = _this$props.eventListeners;
      var loop = options.loop,
          autoplay = options.autoplay,
          animationData = options.animationData,
          rendererSettings = options.rendererSettings,
          segments = options.segments;
      this.options = {
        container: this.el,
        renderer: 'svg',
        loop: loop !== false,
        autoplay: autoplay !== false,
        segments: segments !== false,
        animationData: animationData,
        rendererSettings: rendererSettings
      };
      this.options = _objectSpread(_objectSpread({}, this.options), options);
      this.anim = _lottieWeb["default"].loadAnimation(this.options);
      this.registerEvents(eventListeners);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps
    /* , nextState */
    ) {
      /* Recreate the animation handle if the data is changed */
      if (this.options.animationData !== nextProps.options.animationData) {
        this.deRegisterEvents(this.props.eventListeners);
        this.destroy();
        this.options = _objectSpread(_objectSpread({}, this.options), nextProps.options);
        this.anim = _lottieWeb["default"].loadAnimation(this.options);
        this.registerEvents(nextProps.eventListeners);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.isStopped) {
        this.stop();
      } else if (this.props.segments) {
        this.playSegments();
      } else {
        this.play();
      }

      this.pause();
      this.setSpeed();
      this.setDirection();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deRegisterEvents(this.props.eventListeners);
      this.destroy();
      this.options.animationData = null;
      this.anim = null;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed() {
      this.anim.setSpeed(this.props.speed);
    }
  }, {
    key: "setDirection",
    value: function setDirection() {
      this.anim.setDirection(this.props.direction);
    }
  }, {
    key: "play",
    value: function play() {
      this.anim.play();
    }
  }, {
    key: "playSegments",
    value: function playSegments() {
      this.anim.playSegments(this.props.segments);
    }
  }, {
    key: "stop",
    value: function stop() {
      this.anim.stop();
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.props.isPaused && !this.anim.isPaused) {
        this.anim.pause();
      } else if (!this.props.isPaused && this.anim.isPaused) {
        this.anim.pause();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.anim.destroy();
    }
  }, {
    key: "registerEvents",
    value: function registerEvents(eventListeners) {
      var _this = this;

      eventListeners.forEach(function (eventListener) {
        _this.anim.addEventListener(eventListener.eventName, eventListener.callback);
      });
    }
  }, {
    key: "deRegisterEvents",
    value: function deRegisterEvents(eventListeners) {
      var _this2 = this;

      eventListeners.forEach(function (eventListener) {
        _this2.anim.removeEventListener(eventListener.eventName, eventListener.callback);
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(onClick) {
      // The pause() method is for handling pausing by passing a prop isPaused
      // This method is for handling the ability to pause by clicking on the animation
      console.log('hii123i', this.props);
      alert("Hello! I am an alert box!!");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          ariaRole = _this$props2.ariaRole,
          ariaLabel = _this$props2.ariaLabel,
          isClickToPauseDisabled = _this$props2.isClickToPauseDisabled,
          title = _this$props2.title,
          onClick = _this$props2.onClick;

      var getSize = function getSize(initial) {
        var size;

        if (typeof initial === 'number') {
          size = "".concat(initial, "px");
        } else {
          size = initial || '100%';
        }

        return size;
      };

      var lottieStyles = _objectSpread({
        width: getSize(width),
        height: getSize(height),
        overflow: 'hidden',
        margin: '0 auto',
        outline: 'none'
      }, this.props.style);

      return (
        /*#__PURE__*/
        // Bug with eslint rules https://github.com/airbnb/javascript/issues/1374
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        _react["default"].createElement("div", {
          ref: function ref(c) {
            _this3.el = c;
          },
          style: lottieStyles,
          onClick: isClickToPauseDisabled ? function () {
            return null;
          } : onClick,
          title: title,
          role: ariaRole,
          "aria-label": ariaLabel,
          tabIndex: "0"
        })
      );
    }
  }]);

  return WebLottie;
}(_react["default"].Component);

exports["default"] = WebLottie;
WebLottie.propTypes = {
  eventListeners: _propTypes["default"].arrayOf(_propTypes["default"].object),
  options: _propTypes["default"].object.isRequired,
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  isStopped: _propTypes["default"].bool,
  isPaused: _propTypes["default"].bool,
  speed: _propTypes["default"].number,
  segments: _propTypes["default"].arrayOf(_propTypes["default"].number),
  direction: _propTypes["default"].number,
  ariaRole: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  isClickToPauseDisabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  title: _propTypes["default"].string,
  style: _propTypes["default"].string
};
WebLottie.defaultProps = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
  ariaRole: 'button',
  ariaLabel: 'animation',
  isClickToPauseDisabled: false,
  title: ''
};
