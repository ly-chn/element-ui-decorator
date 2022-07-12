<template>
  <ly-form-item>
    <el-select clearable :value="value" placeholder="请选择" @change="setCurrentValue">
      <el-option v-for="item in usefulOptions"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"
      />
    </el-select>
  </ly-form-item>
</template>

<script>

import {DictOptionsMixin, FormItemMixin} from '../mixins/form-item-mixin'

export default {
  name: 'LySelect',
  mixins: [FormItemMixin, DictOptionsMixin]
}
</script>
