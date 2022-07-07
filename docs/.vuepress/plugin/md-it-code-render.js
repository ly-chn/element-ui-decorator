/**
 * 简易的vue解析插件, 使用vue代码块, 将会同时渲染和显示源码(如果代码的第一行不是`no-render`的话)
 */
function mdItCodeRender(md) {
  md.core.ruler.before('normalize', 'code-render', (state) => {
    state.src = state.src.replace(/([`~@]{3}vue\r\n)(no-render)?([\s\S]+?)([`~@]{3})/mg, (match, p1, p2, p3, p4) => {
      // 不渲染vue, 只渲染代码块
      if (p2) {
        return p1 + p3 + p4
      }
      return p3 + '\n' + p1 + p3 + p4
    })
  })
}

module.exports = mdItCodeRender
