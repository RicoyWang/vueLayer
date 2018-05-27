'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGeneralMethods = initGeneralMethods;
function initGeneralMethods(VueLayer) {
  VueLayer.init = function (vm) {
    var vueLayerInstance = new VueLayer(vm);
    return vueLayerInstance;
  };

  VueLayer.prototype = {
    $Notice: function $Notice(msg) {
      console.log(msg);
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
    }
  };
}