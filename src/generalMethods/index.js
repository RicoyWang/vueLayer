export function initGeneralMethods (VueLayer) {
  VueLayer.init = function (vm) {
    let vueLayerInstance = new VueLayer(vm)
    return vueLayerInstance
  }
}
