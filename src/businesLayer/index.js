import Util from '../util'
import _ from 'lodash'

// --> Method 方法区域，主要负责数据流 不负责视图更新
export function initBusinesLayer (VueLayer) {
  /**
   * TODO
   * @param mutation
   * @returns {MapDetailBusinessLayer}
   * @use：this.commitMouation(mutations)  this.commitMouation({ar: ar})
   * @arguments参数：@mutations 可为对象数组 可以为单个对象{ar:ar,br:br} [{ar: ar},{brr: brr}] 均可，
   *                其中{mutationsName: mutations},mutationsName 为 mutations 的除SET_ 部分的驼峰命名，
   *                mutations 为要更新的数据，为变量。
   *                key与state名必须一致，vuex的mutations 书写格式为SET_ + state 的变量名， 驼峰模式会变成下划线
   *                state.usersInfo -> SET_USERS_INFO (mutation名)  均为大写
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
  /**
   * mutationsArr [mutationsName,mutationsName,mutationsName]
   */
  VueLayer.prototype.$MapMutation = function (mutationsNameArr) {
    let mutationsObject = []
    let state = this._vm.$store.state
    mutationsNameArr.map((item) => {
      mutationsObject[item] = function (state, mutation){

      }
    })
    return mutationsObject
  }
}
