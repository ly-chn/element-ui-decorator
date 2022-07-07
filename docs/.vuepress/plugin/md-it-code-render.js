const enter = '\r\n'
const enter2 = enter.repeat(2)

/**
 * 简易的vue解析插件, 使用vue代码块, 将会同时渲染和显示源码(如果代码的第一行不是`no-render`的话)
 */
function mdItCodeRender(md) {
  md.core.ruler.before('normalize', 'code-render', (state) => {
    state.src = state.src.replace(/([`~@]{3}vue[\r\n]+)(no-render)?([\s\S]+?)([`~@]{3})/mg, (match, p1, p2, p3, p4) => {
      // 不渲染vue, 只渲染代码块
      if (p2) {
        return p1 + p3 + p4
      }
      return `<demo-block>${enter}${p3 + enter2 + p1 + p3 + p4 + enter2}</demo-block>`
    })
  })
}

module.exports = mdItCodeRender
