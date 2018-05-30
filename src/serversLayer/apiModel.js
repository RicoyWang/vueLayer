export function Model (api) {
  this.serverapi = api
}

export function extend () {

}
Model.init = function () {
  return new Model(api)
}
