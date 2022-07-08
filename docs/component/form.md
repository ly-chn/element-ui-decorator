# 表单组件

在后台管理项目中, 几乎所有的表单项都带有以下共性: 

1. 带有label
2. 与Form组件组合使用
3. 同一个Form中Label等宽
4. 所有组件均为受控组件

## Input 输入框

下面是一个简单的input输入框示例

```vue
<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>
```
