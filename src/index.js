import {} from './vueLayer'
import {initviewLayer} from './viewLayer'
import {initserversLayer} from './serversLayer'
import {initBusinesLayer} from './businesLayer'
import {compilerMethods} from './compiler'
import {initGeneralMethods} from './generalMethods'


function VueLayer (vm) {
  this._vm = vm
}
/**
 * Vue 自身的 以及通用的方法
 */
initGeneralMethods(VueLayer)
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
 * 处理vm 与vueLayer之间的方法
 */
compilerMethods(VueLayer)
console.log(VueLayer)

export default VueLayer
