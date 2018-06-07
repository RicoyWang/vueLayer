"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  function Subscription(next, error, complete) {
    (0, _classCallCheck3.default)(this, Subscription);

    this._isStopped = false;
    this._next = next;
    this._error = error;
    this._complete = complete;
  }

  (0, _createClass3.default)(Subscription, [{
    key: "next",
    value: function next(value) {
      if (!this._isStopped) {
        this._next(value);
      }
    }
  }, {
    key: "error",
    value: function error(value) {
      if (!this._isStopped) {
        this._isStopped = true;
        this._error(value);
        this.unsubscribe();
      }
    }
  }, {
    key: "complete",
    value: function complete(value) {
      if (!this._isStopped) {
        this._isStopped = true;
        this._complete(value);
        this.unsubscribe();
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      this._isStopped = true;
    }
  }]);
  return Subscription;
}();