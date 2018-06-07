"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  function PubSubHandler() {
    (0, _classCallCheck3.default)(this, PubSubHandler);

    this.eventPool = {};
  }

  (0, _createClass3.default)(PubSubHandler, [{
    key: "$off",
    value: function $off(topicName) {
      delete this.eventPool[topicName];
    }
  }, {
    key: "$trigger",
    value: function $trigger(topicName) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.eventPool[topicName] && this.eventPool[topicName].forEach(function (callback) {
        callback.apply(undefined, args);
      });
    }
  }, {
    key: "$on",
    value: function $on(topicName, callback) {
      var topic = this.eventPool[topicName];
      if (!topic) {
        this.eventPool[topicName] = [];
      }
      this.eventPool[topicName].push(callback);
      this.on = this.$on.bind(this, topicName);
      return this;
    }
  }]);
  return PubSubHandler;
}();