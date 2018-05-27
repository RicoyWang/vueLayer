'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./vueLayer');

var _viewLayer = require('./viewLayer');

var _serversLayer = require('./serversLayer');

var _businesLayer = require('./businesLayer');

var _compiler = require('./compiler');

var _generalMethods = require('./generalMethods');

function VueLayer(vm) {
  this._vm = vm;
}

(0, _generalMethods.initGeneralMethods)(VueLayer);

(0, _viewLayer.initviewLayer)(VueLayer);

(0, _businesLayer.initBusinesLayer)(VueLayer);

(0, _serversLayer.initserversLayer)(VueLayer);

(0, _compiler.compilerMethods)(VueLayer);
console.log(VueLayer);

exports.default = VueLayer;