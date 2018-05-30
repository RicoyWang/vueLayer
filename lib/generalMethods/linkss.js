'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NodeToTarget = function () {
  function NodeToTarget(graphData, onId, targetId) {
    (0, _classCallCheck3.default)(this, NodeToTarget);

    this.nodes = graphData.nodes;
    this.links = graphData.links;
    this.linksMap = new _map2.default();
    this.onId = onId;
    this.targetId = targetId;
    this.higthLightLinks = [];
    this.nodePath = [];
    this.linkPath = [];
  }

  (0, _createClass3.default)(NodeToTarget, [{
    key: 'run',
    value: function run() {
      var _this = this;

      this.links.forEach(function (link) {
        _this.linksMap.set(link.id, link);
      });
      this.mouseFindTarget(this.linksMap, this.onId, this.targetId, [], [], []);
      console.log(this.higthLightLinks);
      console.log('nodePath', this.nodePath);
      console.log('linkPath', this.linkPath);
    }
  }, {
    key: 'mouseFindTarget',
    value: function mouseFindTarget(linksMap, onId, targetId, higthLightLinks, nodePath, linkPath) {
      var _this2 = this;

      linksMap.forEach(function (linkValue, linkKey) {
        var newlinksMap = _lodash2.default.clone(linksMap);
        var newhigthLightLinks = _lodash2.default.clone(higthLightLinks);
        var newnodePath = _lodash2.default.clone(nodePath);
        var newlinkPath = _lodash2.default.clone(linkPath);
        var linkIdSet = new _set2.default();
        linkIdSet.add(linkValue.endNodeId);
        linkIdSet.add(linkValue.startNodeId);

        if (linkIdSet.has(onId) && linkIdSet.has(targetId) && onId !== targetId) {
          newhigthLightLinks.push(linkKey);
          newnodePath.push(onId);
          newnodePath.push(targetId);
          newlinkPath.push(linkKey);
          _this2.higthLightLinks = _lodash2.default.concat(_this2.higthLightLinks, newhigthLightLinks);

          _this2.nodePath.push(_lodash2.default.clone(newnodePath));

          _this2.linkPath.push(_lodash2.default.clone(newlinkPath));
        } else if (linkIdSet.has(onId)) {
          var newid = void 0;
          newlinksMap.delete(linkKey);
          linkIdSet.delete(onId);
          newid = [].concat((0, _toConsumableArray3.default)(linkIdSet))[0];

          newhigthLightLinks.push(linkKey);
          newnodePath.push(onId);
          newlinkPath.push(linkKey);

          _this2.mouseFindTarget(newlinksMap, newid, targetId, newhigthLightLinks, newnodePath, newlinkPath);
        }
      });
    }
  }], [{
    key: 'init',
    value: function init(graphData, onId, targetId) {
      return new NodeToTarget(graphData, onId, targetId);
    }
  }]);
  return NodeToTarget;
}();

exports.default = NodeToTarget;