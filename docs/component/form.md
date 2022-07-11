# 表单组件

在后台管理项目中, 几乎所有的表单项都带有以下共性:

1. 带有label
2. 与Form组件组合使用
3. 同一个Form中Label等宽
4. 所有组件均为受控组件

## Input 输入框

### 基本用法

```vue

<template>
  <ly-form>
    <ly-input label="你好" v-model="value" />
  </ly-form>
</template>

<script>
export default {
  data() {
    return {
      value: undefined
    }
  }
}
</script>
```

## Radio 单选框

### 基本用法

```vue

<template>
  <ly-form>
    <ly-radio label="你好" v-model="value" />
  </ly-form>
</template>

<script>
export default {
  data() {
    return {
      value: undefined
    }
  }
}
</script>
```