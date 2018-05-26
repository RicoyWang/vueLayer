import Util from '../util'
import _ from 'lodash'

// --> Method 方法区域，主要负责数据流 不负责视图更新
export function initBusinesLayer (VueLayer) {
  /**
   * @param mutation
   * @returns {MapDetailBusinessLayer}
   * @use：this.commitMouation(mutations)  this.commitMouation({ar: ar})
   * @arguments参数：@mutations 可为对象数组 可以为单个对象{ar:ar,br:br} [{ar: ar},{brr: brr}] 均可，
   *                key与state名必须一致，vuex的mutations 书写格式为SET_ + state 的变量名， 驼峰模式会变成下划线
   *                state.usersInfo -> SET_USERS_INFO (mutation名)
   *                @nameSpace Vuex的命名空间 String
   * @import：import _ from 'lodash'
   */
  VueLayer.prototype.$commitMouation = function (mutation, nameSpace) {
    let _nameSpace = nameSpace ? `${nameSpace}/` : ''
    function mutationVarToString (mutationItem) {
      for (let key in mutationItem) {
        let setMutationName = `SET_${key.replace(/([a-z])([A-Z])/, '$1_$2').toUpperCase()}`
        console.log(`${_nameSpace}${setMutationName}`, mutation)
        this._vm.$store.commit(`${_nameSpace}${setMutationName}`, mutation)
      }
    }
    if (Util.isArray(mutation) && mutation) {
      mutation.forEach((mutationItem) => {
        mutationVarToString.call(this, mutationItem)
      })
    } else if (mutation) {
      mutationVarToString.call(this, mutation)
    }
    return this
  }
  VueLayer.prototype.$dispathMouation = function () {

  }
}
