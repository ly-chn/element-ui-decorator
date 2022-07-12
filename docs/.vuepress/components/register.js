import {LyUtil} from './form/util/ly-util'

export default Vue=>{
  const requireComponent = require.context('.', true, /.vue$/);
  requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)
    // 全局注册组件
    Vue.component(
      componentConfig.default.name,
      componentConfig.default || componentConfig
    )
  })
  Vue.use(LyUtil)
}
