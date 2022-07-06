/**
 * 简易的vue解析插件, 使用@@@符号包裹Vue元素, 将会同时渲染和显示源码, 看起来十分的舒服
 */
function mdItCodeRender(md, options) {
    md.core.ruler.before('normalize', 'code-render', (state, line) => {
        state.src = state.src.replace(/[`~@]{3}([\s\S]+?)[`~@]{3}/mg, '$1\n```vue\n$1\n```')
        console.log(state.src, '\n'.repeat(10))
        console.log(state.src, '\n'.repeat(10))
    })
}

module.exports = mdItCodeRender
