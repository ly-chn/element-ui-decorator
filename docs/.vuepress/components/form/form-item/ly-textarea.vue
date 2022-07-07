<template>
  <ly-form-item>
    <el-input :value="value"
              type="textarea"
              :max-length="maxLength"
              :min-length="minLength"
              :show-word-limit="Boolean(maxLength)"
              :placeholder="placeholder"
              @input="setCurrentValue" />
  </ly-form-item>
</template>

<script>

import {FormItemMixin} from '../mixins/form-item-mixin'

export default {
  name: 'LyTextarea',
  mixins: [FormItemMixin],
  props: {
    /**
     * 输入框行数
     */
    rows: {
      type: Number,
      default: 2
    },
    /**
     * 自适应内容高度, 可传入对象，如，{ minRows: 2, maxRows: 6 }
     */
    autosize: [Object, Boolean],
    /**
     * 原生属性，最大输入长度
     */
    maxLength: Number,
    /**
     * 原生属性，最小输入长度
     */
    minLength: Number,
    span: {
      type: Number,
      default: 24
    }
  }
}
</script>
