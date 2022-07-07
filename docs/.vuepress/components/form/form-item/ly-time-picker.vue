<template>
  <ly-form-item>
    <el-time-picker
      :value="value"
      :picker-options="pickerOptions"
      :placeholder="placeholder"
      @change="setCurrentValue" />
  </ly-form-item>
</template>

<script>

import {FormItemMixin} from '../mixins/form-item-mixin'

export default {
  name: 'LyTimePicker',
  mixins: [FormItemMixin],
  props: {
    pickerOptions: {
      type: Object
    },
    /**
     * 时间格式化 小时：HH，分：mm，秒：ss，AM/PM A
     */
    format: {
      type: String,
      default: 'HH:mm'
    },
    /**
     * 可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']	string / array
     */
    selectableRange: [String, Array]
  }
}
</script>
