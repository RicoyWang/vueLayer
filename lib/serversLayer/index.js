'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initserversLayer = initserversLayer;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initserversLayer(VueLayer) {
  VueLayer.prototype._servers = function () {
    var layer = this;
    console.log(layer);
  };
}