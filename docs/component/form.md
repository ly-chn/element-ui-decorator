# 表单组件

在后台管理项目中, 几乎所有的表单项都带有以下共性:

1. 带有label
2. 与Form组件组合使用
3. 同一个Form中Label等宽
4. 所有组件均为受控组件

## 表单示例

一个简单的表单示例

```vue

<template>
  <ly-form only>
    <ly-input label="你好" v-model="value" />
    <!--<ly-input label="商品名称" v-model="form.name" :rules="[$rules.must]" />
    <ly-select label="所述分类" v-model="form.type" :rules="[$rules.must]" />
    <ly-upload relation-id="1" label="商品图片" v-model="form.images"/>-->
  </ly-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        
      }
    }
  }
}
</script>
```

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