'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initBusinesLayer = initBusinesLayer;

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initBusinesLayer(VueLayer) {
  VueLayer.prototype.$commitMouation = function (mutation, nameSpace) {
    var _this = this;

    var _nameSpace = nameSpace ? nameSpace + '/' : '';
    function mutationVarToString(mutationItem) {
      for (var key in mutationItem) {
        var setMutationName = 'SET_' + key.replace(/([a-z])([A-Z])/, '$1_$2').toUpperCase();
        console.log('' + _nameSpace + setMutationName, mutation);
        this._vm.$store.commit('' + _nameSpace + setMutationName, mutation);
      }
    }
    if (_util2.default.isArray(mutation) && mutation) {
      mutation.forEach(function (mutationItem) {
        mutationVarToString.call(_this, mutationItem);
      });
    } else if (mutation) {
      mutationVarToString.call(this, mutation);
    }
    return this;
  };
  VueLayer.prototype.$dispathMouation = function () {};

  VueLayer.prototype.$MapMutation = function (mutationsNameArr) {
    var mutationsObject = [];
    var state = this._vm.$store.state;
    mutationsNameArr.map(function (item) {
      mutationsObject[item] = function (state, mutation) {};
    });
    return mutationsObject;
  };
}