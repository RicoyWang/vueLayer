import _ from 'lodash'

/**
 * 将vue实例上 VL开头的挂载到 vueLayer上，并以$开头 或者VL开头的方式使用，
 * 为了将方法逻辑分开，直接在Vue 的this调用VL方法是无效的，
 * @param VueLayer
 */
export function compilerMethods (VueLayer) {
  VueLayer.prototype._compiler = () => {
    let vueLayer = this
    let _vm = vueLayer._vm
    if (_vm) {
      this._Notice('vm is undefine')
    }
    for (let key in _vm) {
      let keyreg = key.match(/^VL(\S*)/)
      if (keyreg && keyreg) {
        _addToVueLayer.call(this, key.match(/^VL(\S*)/)[1])
        _canNotUseOnVm.call(this, key)
      }
    }
    return this
  }
}

export function _addToVueLayer (key) {
  this[`$${key}`] = this._vm[key]
  this[`VL${key}`] = this._vm[key]
}

/**
 * 可配置config 如果为true 则在vm上也可以使用VL方法，建议还是养成好习惯；
 * @param key
 * @private
 */
export function _canNotUseOnVm(key) {
  let _vm = this._vm
  if (this.config) {
    _vm[key] = () => {
      this.$Notice('建议启用强力模式，养成好习惯')
      if (_.isFunction(_vm[key]) && _vm[key]) {
        _vm[key].call(this._vm)
      }
    }
  } else {
    delete this._vm[key]
  }

}
