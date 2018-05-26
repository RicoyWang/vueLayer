/**
 * 模块名+Service的命名规则
 */
export let VueLayer = function (vm) {
  /**
   * 初始化实例变量
   * 1、TODO 通过this 和_vm 方法属性的拷贝，实现方法公用 ？ 很难说，待定
   * 2、TODO newClassObject.method1().method2()._vm.viewMethod3()
   * 3、TODO
   */
  this._vm = vm
  return this
}
