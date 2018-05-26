import _ from 'lodash'
export function viewLayer (VueLayer) {
  VueLayer.prototype._initView = () => {
    let layer = this
    console.log(layer)
  }
  // --> view 层控制 UI显示
  /**
   * 一个弹框的open -> close 过程
   * @param showStatusValueName 为属性名，需为Booleam值
   */
  VueLayer.prototype.$teggle = (showStatusValueName) => {
    if (_.isString(showStatusValueName)) {
      this._Notice('属性名需为字符串')
      return
    }
    this._vm[showStatusValueName] = !this._vm[showStatusValueName]
    return this
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
