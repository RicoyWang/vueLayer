import axios from 'axios'
import Util from '../util'
// --> Method 方法区域，主要负责数据流 不负责视图更新
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
export function initBusinesLayer (Vue) {
  Vue.prototype.$commitMouation = (mutation, nameSpace) => {
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
}
/**
 * 模块名+Service的命名规则
 */
class MapDetailBusinessLayer {
  /**
   * 初始化实例变量
   * 1、TODO 通过this 和_vm 方法属性的拷贝，实现方法公用 ？ 很难说，待定
   * 2、TODO newClassObject.method1().method2()._vm.viewMethod3()
   * 3、TODO
   */
  constructor(_vm) {
    this._vm = _vm
    this._view = _vm // 别称
    this._data = {
      id: 'newPlace'
    }
    this.NameSpace = 'virtualReal'
  }
  /**
   *
   * @param is
   * @param fn1 函数返回结果 需要为this 才能继续链式
   * @param fn2 函数返回结果 需要为this 才能继续链式
   * @returns {*}
   * @use this.ifElseMethod(true, fn1, fn2)
   */
  ifElseMethod(isTrue, fn1, fn2) {
    if (isTrue) {
      return fn1 || console.log('true情况下无可执行函数')
    } else {
      return fn2 || console.log('false情况下无可执行函数')
    }
  }
  /**
   * 接受请求后，开始处理数据的下一步
   */
  doAfterResponse() {
    this.asyncMethods()
    return this
  }
  /**
   * 涉及到接口请求
   */
  async asyncMethods(url) {
    let res = await axios.get(url)
    return res
  }
}

export default MapDetailBusinessLayer
