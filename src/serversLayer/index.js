import _ from 'lodash'
export function initserversLayer (VueLayer) {
  VueLayer.prototype._servers = function () {
    let layer = this
    console.log(layer)
  }
}
