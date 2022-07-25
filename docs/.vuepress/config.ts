import {defineConfig} from 'vuepress/config'
import DemoBlock from 'vuepress-plugin-editable-demo-block'
export default defineConfig({
  title: 'Element UI Decorator',
  description: 'Element UI 二次封装指南(Vue2)',
  // https://github.com/vuejs/vuepress/issues/2275
  chainWebpack(config, isServer) {
    if (!isServer) {
      config.resolve.modules.merge(['node_modules'])
    }
    return config
  },
  themeConfig: {
    repo: 'ly-chn/element-ui-decorator',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs/',
    smoothScroll: true,
    nav: [
      {text: '指南', link: '/guide/'},
      {text: '组件', link: '/component/'},
    ],
    sidebar: {
      '/guide/': ['', 'standard', 'q&a'],
      '/component/': ['', 'form']
    }
  },
  plugins: [DemoBlock]
})
