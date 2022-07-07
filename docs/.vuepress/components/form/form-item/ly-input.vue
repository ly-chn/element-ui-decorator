<template>
  <ly-form-item>
    <el-input :value="value"
              :placeholder="placeholder"
              :max-length="maxLength"
              :min-length="minLength"
              :show-word-limit="Boolean(maxLength)"
              @input="setCurrentValue" />
  </ly-form-item>
</template>

<script>

import {FormItemMixin} from '../mixins/form-item-mixin'

export default {
  name: 'LyInput',
  mixins: [FormItemMixin],
  props: {
    /**
     * 原生属性，最大输入长度
     */
    maxLength: Number,
    /**
     * 原生属性，最小输入长度
     */
    minLength: Number
  }
}
</script>
