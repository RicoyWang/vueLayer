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
    $Notice(msg) {
      console.log(msg)
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
    }
  }
}
