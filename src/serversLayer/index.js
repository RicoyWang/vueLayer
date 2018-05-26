import axios from 'axios'
import _ from 'lodash'

let Util = (function() {
  return {
    varToStingName: (v) => Object.keys(v)[0], // Util.varToStingName()
    isSomeObj: (type) => {
      return function (obj) {
        return Object.prototype.toString.call(obj).slice(8, -1) === type
      }
    },
    isString: (obj) => _.isString(obj),
    isObject: (obj) => _.isPlainObject(obj),
    isArray: (obj) => _.isArray(obj),
  }
})()
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
  // --> 通用类
  /**
   *  TODO 提供拓展接口 待优化
   */
  _Notice(msg) {
    console.log(msg)
  }
  // --> view 层控制 UI显示
  /**
   * 一个弹框的open -> close 过程
   * @param showStatusValueName 为属性名，需为Booleam值
   */
  teggle(showStatusValueName) {
    if (_.isString(showStatusValueName)) {
      this._Notice('属性名需为字符串')
      return
    }
    this._vm[showStatusValueName] = !this._vm[showStatusValueName]
    return this
  }

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
  commitMouation(mutation, nameSpace) {
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

  // -->拓展类
  /**
   * @param fn
   * @returns {MapDetailBusinessLayer}
   */
  addMethod(fn) {
    fn.apply(this, arguments)
    return this
  }

  /**
   *
   * @param attrObj
   * @returns {MapDetailBusinessLayer}
   */
  addAttr(attrObj) {
    if (!attrObj) {
      this._Notice('addAttr 传参需非空')
      return
    }
    for (let key in attrObj) {
      this[key] = attrObj[key]
    }
    return this
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
