<template>
  <ly-form-item>
    <el-radio-group :value="value" @change="setCurrentValue">
      <el-radio-button v-for="item in usefulOptions"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
  </ly-form-item>
</template>

<script>

import {DictOptionsMixin, FormItemMixin} from '../mixins/form-item-mixin'

export default {
  name: 'LyRadio',
  mixins: [FormItemMixin, DictOptionsMixin]
}
</script>
