'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compilerMethods = compilerMethods;
exports._addToVueLayer = _addToVueLayer;
exports._canNotUseOnVm = _canNotUseOnVm;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function compilerMethods(VueLayer) {
  VueLayer.prototype._compiler = function () {
    console.log('_compiler this is', this);
    var _vm = this._vm;
    if (!_vm) {
      this._Notice('vm is undefined');
    }
    for (var key in _vm) {
      var keyreg = key.match(/^VL(\S*)/);
      if (keyreg && keyreg[1]) {
        _addToVueLayer.call(this, key);
        _canNotUseOnVm.call(this, key);
      }
    }
    return this;
  };
}

function _addToVueLayer(key) {
  var newKey = key.match(/^VL(\S*)/)[1];
  this['$' + newKey] = this._vm[key];
  this['VL' + newKey] = this._vm[key];
}

function _canNotUseOnVm(key) {
  var _this = this;

  var _vm = this._vm;
  if (this.config) {
    _vm[key] = function () {
      _this.$Notice('建议启用强力模式，养成好习惯');
      if (_lodash2.default.isFunction(_vm[key]) && _vm[key]) {
        _vm[key].call(_this._vm);
      }
    };
  } else {
    delete this._vm[key];
  }
}