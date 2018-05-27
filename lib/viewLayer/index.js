'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initviewLayer = initviewLayer;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initviewLayer(VueLayer) {
  var _this = this;

  VueLayer.prototype._initView = function () {
    var layer = this;
    console.log(layer);
  };

  VueLayer.prototype.$teggle = function (showStatusValueName) {
    if (_lodash2.default.isString(showStatusValueName)) {
      _this._Notice('属性名需为字符串');
      return;
    }
    _this._vm[showStatusValueName] = !_this._vm[showStatusValueName];
    return _this;
  };
}