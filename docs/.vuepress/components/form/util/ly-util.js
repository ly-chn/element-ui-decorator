import rules from './rule'

/**
 * 对功能未实现时的占位
 */
export const todo = (...args) => console.warn('功能未实现', ...args)

export const LyUtil = {
  install(Vue, options) {
    Vue.prototype.$rules = rules
    Vue.prototype.$todo = todo
  }
}
