'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Util = {
  varToStingName: function varToStingName(v) {
    return (0, _keys2.default)(v)[0];
  },
  isSomeObj: function isSomeObj(type) {
    return function (obj) {
      return Object.prototype.toString.call(obj).slice(8, -1) === type;
    };
  },
  isString: function isString(obj) {
    return _lodash2.default.isString(obj);
  },
  isObject: function isObject(obj) {
    return _lodash2.default.isPlainObject(obj);
  },
  isArray: function isArray(obj) {
    return _lodash2.default.isArray(obj);
  }
};
exports.default = Util;