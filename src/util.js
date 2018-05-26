import _ from 'lodash'
let Util =  {
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
export default Util
