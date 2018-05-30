"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model = Model;
exports.extend = extend;
function Model(api) {
  this.serverapi = api;
}

function extend() {}
Model.init = function () {
  return new Model(api);
};