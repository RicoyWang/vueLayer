> 用于Vue 项目中的业务，视图等逻辑分层
##### TODO
- 接口格式提前约定及检测  类似于请求参数需要[{}]，只有通过检测才能通过 【5.25】
  - 不通过的报错处理 【5.25】
  - 严格模式 与非严格模式，如果功能不够完善暂时使用非严格模式，预留配置 【5.25】
  - 通过正则判断 -- 似乎不是很可选 【5.27】
  - 参考props的默认值，是个思路但好像不是很够用， 【5.30】
- 用户自己注册命名空间，做好管理分类，此项为设想，为做验证，使用方式，使用情况不明确。【5.30】
  - 使用情况：
     - 一个组件中存在两种模式下的使用 【5.30】
  -  构思
     - 通过命名空间分割开不同的业务逻辑，感觉可能会有些繁琐，后面考虑如何优化
- 截获Vue 的生命周期
  - 效果: created(VLmethods).mounted(VLmethods) 效果感觉会挺不错的
  - 实现方式： minxin 或者手动挂到this上，
- 错误集中处理
  - 先学下vue
  
##### Map
- vuex的优化处理
  - mutation commit 优化 和mutatin 对象集的优化 已开始  【5.25】
  - dispath 优化  未开始    【5.25】
- 
##### 自用测试
import VueLayer from '../../../static/VueLayer'
##### API 说明
- 通用类 initGeneralMethods
  - VueLayer.$Notice(msg) > 初稿 全局使用  【5.26】
  - VueLayer.addMethod(fn) > 初稿 考虑的情况需要再确定 【5.26】
  - VueLayer.addAttr(Obj) > 初稿 考虑的情况需再确定   【5.26】
  
- 视图类 initviewLayer
  - VueLayer.$teggle()  > 起步  【5.26】
- 业务类 initBusinesLayer
  - VueLayer.$commitMouation > 初稿 业务层使用  【5.26】
  - VueLayer.$MapMutation    > 起步 vuex中使用 【5.27】
  - VueLayer.$dispathMouation > 未开始 业务层使用 【5.28】
- 请求类 initserversLayer    【5.26】
- 编译类 compilerMethods 最后编译，一般为内部方法  【5.27】
  - VueLayer._compilerMethods > 初稿 带VL开头的方法会被重新挂载到VueLayer  【5.27】
