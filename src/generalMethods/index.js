import NodeToTarget  from './linkss'
import PubSubHandler from './PubSubHandler'
export function initGeneralMethods (VueLayer) {
  VueLayer.init = function (vm) {
    let vueLayerInstance = new VueLayer(vm)
    return vueLayerInstance
  }
  // --> 通用类
  /**
   *  TODO 提供拓展接口 待优化
   */
  VueLayer.prototype = {
    pubSubHandler:new PubSubHandler(),
    $Notice(msg) {
      console.log(msg + ' from Notice')
    },
    // -->拓展类
    /**
     * @param fn
     * @returns {MapDetailBusinessLayer}
     */
    addMethod (fn) {
      fn.apply(this, arguments)
      return this
    },
    /**
     * @param attrObj
     * @returns {MapDetailBusinessLayer}
     */
    addAttr (attrObj) {
      if (!attrObj) {
        this._Notice('addAttr 传参需非空')
        return
      }
      for (let key in attrObj) {
        this[key] = attrObj[key]
      }
      return this
    },
    $on (event, fn) {
      const layer= this
      if (_.isArray(event)) {
        for (let i = 0, l = event.length; i < l; i++) {
          this.$on(event[i], fn)
        }
      } else {
        (layer._events[event] || (layer._events[event] = [])).push(fn)
      }
      return layer
    },
    $emit (event) {
      const layer = this
      let cbs = layer._events[event]
      if (cbs) {
        cbs = cbs.length > 1 ? toArray(cbs) : cbs
        const args = toArray(arguments, 1)
        for (let i = 0, l = cbs.length; i < l; i++) {
          cbs[i].apply(layer, args)
        }
      }
      return layer
    },
    $makeLink (dataNameSting) {
      let vm = this._vm
      let graphData = vm[dataNameSting]
      let onId = '11224976'
      let targetId = '11224977'
      // console.log(graphData)
      NodeToTarget.init(graphData, onId, targetId).run()
    },
    $mounted (param) {
      return buildCircleLayerChain.call(this, param, '_isMounted')
    },
    $destroy (param) {
      return buildCircleLayerChain.call(this, param, '_isDestroyed')
    },
    $beingdestroy (param) {
      return buildCircleLayerChain.call(this, param, '_isBeingDestroyed')
    }
  }
}
export function noop () {}

/**
 *
 * @param param 如果是函数则为要生命周期时要执行的函数，如果为字符串，则为nameSpace 根据不同命名空间，执行不同订阅的事件
 * @param circleName 多种不同生命钩子
 */
export function buildCircleLayerChain (param, circleName) {
  let _vm = this._vm
  let chainObject = {}
  let fn
  if (_.isFunction(param)) {
    fn = param
    chainObject =this
  } else if (_.isString(param)) {
    fn = this.pubSubHandler.$trigger.bind(this.pubSubHandler,param)
    chainObject.on = this.pubSubHandler.$on.bind(this.pubSubHandler,param)
  }
  setDefineProperty(_vm, circleName, fn)
  // 返回继续链式调用
  return chainObject
}
// 构造计算属性
export function setDefineProperty (vm, target, fn) {
  let _isMounted = null
  Object.defineProperty(vm, target, {
    set: function (value) {
      _isMounted = value
      if (value === true) {
        fn.call(this)
      }
    },
    get: function () {
      return _isMounted
    }
  })
}
