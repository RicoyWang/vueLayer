import {VueLayer} from './vueLayer'
import {viewLayer} from './viewLayer'
// import {serversLayer} from './serversLayerr'
import {initBusinesLayer} from './businesLayer'
import {compilerMethods} from './compilerLayer'

viewLayer(VueLayer)
initBusinesLayer(VueLayer)
// serversLayer(VueLayer)
compilerMethods(VueLayer)
export default VueLayer
