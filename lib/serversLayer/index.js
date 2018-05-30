'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initserversLayer = initserversLayer;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _apiModel = require('./apiModel');

var _apiModel2 = _interopRequireDefault(_apiModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initserversLayer(VueLayer) {
  VueLayer.prototype._servers = function () {
    var layer = this;
  };
}