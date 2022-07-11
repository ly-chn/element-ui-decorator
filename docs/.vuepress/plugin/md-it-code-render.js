const enter = '\r\n'

/**
 * 简易的vue解析插件, 使用vue代码块, 将会同时渲染和显示源码(如果代码的第一行不是`no-render`的话)
 */
function mdItCodeRender(md) {
  md.core.ruler.before('normalize', 'code-render', (state) => {
    state.src = state.src.replace(/([`~@]{3}vue[\r\n]+)(no-render)?([\s\S]+?)([`~@]{3})/mg,
      (match, codeStart, noRender, code, codeEnd) => {
        // 不渲染vue, 只渲染代码块
        if (noRender) {
          return codeStart.trim() + enter + code + codeEnd
        }
        return '<demo-block>\n' +
          '<template slot="default">\n' +
          code +
          '</template>\n' +
          '<template slot="code">\n' +
          '\n\n::: v-pre\n' +
          enter + codeStart.trim() + enter + code + codeEnd + enter +
          '\n\n:::\n' +
          '</template>\n' +
          '</demo-block>'
      })
  })
}

module.exports = mdItCodeRender
