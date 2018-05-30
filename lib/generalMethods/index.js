'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGeneralMethods = initGeneralMethods;

var _linkss = require('./linkss');

var _linkss2 = _interopRequireDefault(_linkss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initGeneralMethods(VueLayer) {
  VueLayer.init = function (vm) {
    var vueLayerInstance = new VueLayer(vm);
    return vueLayerInstance;
  };

  VueLayer.prototype = {
    $Notice: function $Notice(msg) {
      console.log(msg + 'NPM 开发环境');
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
    $makeLink: function $makeLink(dataNameSting) {
      var vm = this._vm;
      var graphData = vm[dataNameSting];
      var onId = '11224976';
      var targetId = '11224977';

      _linkss2.default.init(graphData, onId, targetId).run();
    }
  };
}