<template>
  <el-col :span="formItemInstance.colSpan" class="ly-form-item-col">
    <!--支持自定义渲染, 字典, 日期等渲染, 性能差点, 功能不错-->
    <div class="ly-form-item-text-render hidden">
      {{ text }}
    </div>
    <el-form-item ref="formItem"
                  class="ly-form-item"
                  :label-width="usefulLabelWidth"
                  :label="usefulLabel"
                  :prop="prop || formItemInstance.prop"
                  :rules="usefulRules">
      <slot />
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  name: 'LyFormItem',
  props: {
    /**
     * 标签文本
     */
    label: {
      type: String
    },
    /**
     * 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
     */
    prop: {
      type: String
    },
    /**
     * 表单验证规则
     */
    rules: {
      type: Array
    },
    /**
     * 为true时，表单不可编辑
     */
    disabled: {
      type: Boolean
    },
    /**
     * 占位符
     */
    placeholder: {
      type: String
    }
  },
  computed: {
    /**
     * 禁用当前组件
     */
    disabledItem() {
      return this.disabled || this.formItemInstance.disabled || this.formInstance.disabled
    },
    /**
     * 可用规则校验
     */
    usefulRules() {
      if (this.disabledItem) {
        return undefined
      }
      const rules = this.rules || this.formItemInstance.rules || []
      const res = rules.map(it => typeof it === 'function' ? it() : it)
      if (res && res.length && !this.prop && !this.formItemInstance.prop) {
        this.$nextTick(() => console.error('provide prop for rules, please', this.label, this.$refs.formItem.$el))
      }
      return res
    },
    text() {
      return this.formItemInstance.value
    },
    usefulLabel() {
      return this.label || this.formItemInstance.label
    },
    usefulLabelWidth() {
      if (this.usefulLabel) {
        return undefined
      }
      return '0'
    }
  },
  inject: {
    formItemInstance: {
      default: {}
    },
    formInstance: {
      default: {}
    }
  }
}

</script>
