'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

exports.initGeneralMethods = initGeneralMethods;
exports.noop = noop;
exports.buildCircleLayerChain = buildCircleLayerChain;
exports.setDefineProperty = setDefineProperty;

var _linkss = require('./linkss');

var _linkss2 = _interopRequireDefault(_linkss);

var _PubSubHandler = require('./PubSubHandler');

var _PubSubHandler2 = _interopRequireDefault(_PubSubHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initGeneralMethods(VueLayer) {
  VueLayer.init = function (vm) {
    var vueLayerInstance = new VueLayer(vm);
    return vueLayerInstance;
  };

  VueLayer.prototype = {
    pubSubHandler: new _PubSubHandler2.default(),
    $Notice: function $Notice(msg) {
      console.log(msg + ' from Notice');
    },
    addMethod: function addMethod(fn) {
      fn.apply(this, arguments);
      return this;
    },
    addAttr: function addAttr(attrObj) {
      if (!attrObj) {
        this._Notice('addAttr 传参需非空');
        return;
      }
      for (var key in attrObj) {
        this[key] = attrObj[key];
      }
      return this;
    },
    $on: function $on(event, fn) {
      var layer = this;
      if (_.isArray(event)) {
        for (var i = 0, l = event.length; i < l; i++) {
          this.$on(event[i], fn);
        }
      } else {
        (layer._events[event] || (layer._events[event] = [])).push(fn);
      }
      return layer;
    },
    $emit: function $emit(event) {
      var layer = this;
      var cbs = layer._events[event];
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
        var args = toArray(arguments, 1);
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i].apply(layer, args);
        }
      }
      return layer;
    },
    $makeLink: function $makeLink(dataNameSting) {
      var vm = this._vm;
      var graphData = vm[dataNameSting];
      var onId = '11224976';
      var targetId = '11224977';

      _linkss2.default.init(graphData, onId, targetId).run();
    },
    $mounted: function $mounted(param) {
      return buildCircleLayerChain.call(this, param, '_isMounted');
    },
    $destroy: function $destroy(param) {
      return buildCircleLayerChain.call(this, param, '_isDestroyed');
    },
    $beingdestroy: function $beingdestroy(param) {
      return buildCircleLayerChain.call(this, param, '_isBeingDestroyed');
    }
  };
}
function noop() {}

function buildCircleLayerChain(param, circleName) {
  var _vm = this._vm;
  var chainObject = {};
  var fn = void 0;
  if (_.isFunction(param)) {
    fn = param;
    chainObject = this;
  } else if (_.isString(param)) {
    fn = this.pubSubHandler.$trigger.bind(this.pubSubHandler, param);
    chainObject.on = this.pubSubHandler.$on.bind(this.pubSubHandler, param);
  }
  setDefineProperty(_vm, circleName, fn);

  return chainObject;
}
function setDefineProperty(vm, target, fn) {
  var _isMounted = null;
  (0, _defineProperty2.default)(vm, target, {
    set: function set(value) {
      _isMounted = value;
      if (value === true) {
        fn.call(this);
      }
    },
    get: function get() {
      return _isMounted;
    }
  });
}