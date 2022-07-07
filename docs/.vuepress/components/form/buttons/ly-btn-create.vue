<template>
  <el-button class="ly-form-button"
             :loading="loading"
             :disabled="disabled"
             icon="el-icon-plus"
             type="primary"
             :size="small ? 'small' : 'medium'"
             plain
             @click="$emit('click')">
    <slot>新增</slot>
  </el-button>
</template>

<script>

import FormButtonMixin from './mixins/form-button-mixin'

export default {
  name: 'LyBtnCreate',
  mixins: [FormButtonMixin],
  props: {
    /**
     * 小按钮
     */
    small: Boolean
  }
}
</script>
