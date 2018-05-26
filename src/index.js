import {} from './vueLayer'
import {initviewLayer} from './viewLayer'
import {initserversLayer} from './serversLayer'
import {initBusinesLayer} from './businesLayer'
import {compilerMethods} from './compiler'
import {initGeneralMethods} from './generalMethods'
function VueLayer (vm) {
  /**
   * 初始化实例变量
   * 1、TODO 通过this 和_vm 方法属性的拷贝，实现方法公用 ？ 很难说，待定
   * 2、TODO newClassObject.method1().method2()._vm.viewMethod3()
   * 3、TODO
   */
  this._vm = vm
}
/**
 * 关于视图层的代码 比较复杂
 */
initviewLayer(VueLayer)
/**
 * 关于业务层梳理的代码
 */
initBusinesLayer(VueLayer)
/**
 * 发送请求层的代码
 */
initserversLayer(VueLayer)
/**
 * Vue 自身的 以及通用的方法
 */
initGeneralMethods(VueLayer)
/**
 * 处理vm 与vueLayer之间的方法
 */
compilerMethods(VueLayer)
console.log(VueLayer)

export default VueLayer
