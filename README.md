> 用于Vue 项目中的业务，视图等逻辑分层
##### TODO
- 接口格式提前约定及检测  类似于请求参数需要[{}]，只有通过检测才能通过
  - 不通过的报错处理
  - 严格模式 与非严格模式，如果功能不够完善暂时使用非严格模式，预留配置
##### Map
- vuex的优化处理
  - mutation commit 优化 和mutatin 对象集的优化 已开始
  - dispath 优化  未开始
- 
##### 自用测试
import VueLayer from '../../../static/VueLayer'
##### API 说明
- 通用类 initGeneralMethods
  - VueLayer.$Notice(msg) > 初稿 全局使用
  - VueLayer.addMethod(fn) > 初稿 考虑的情况需要再确定
  - VueLayer.addAttr(Obj) > 初稿 考虑的情况需再确定
  
- 视图类 initviewLayer
  - VueLayer.$teggle()  > 起步
  - VueLayer.addMethod(fn) > 初稿 考虑的情况需要再确定
  - VueLayer.addAttr(Obj)  > 初稿 考虑的情况需再确定
- 业务类 initBusinesLayer
  - VueLayer.$commitMouation > 初稿 业务层使用
  - VueLayer.$MapMutation    > 起步 vuex中使用
  - VueLayer.$dispathMouation > 未开始 业务层使用
- 请求类 initserversLayer
- 编译类 compilerMethods 最后编译，一般为内部方法
  - VueLayer._compilerMethods > 初稿 带VL开头的方法会被重新挂载到VueLayer
