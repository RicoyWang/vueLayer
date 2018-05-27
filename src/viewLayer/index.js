import _ from 'lodash'
export function initviewLayer (VueLayer) {
  VueLayer.prototype._initView = function () {
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

}
