/**
 * 栅栏布局可选参数
 */
export const ColSpanMixin = {
  props: {
    /**
     * all of 24
     */
    only: {
      type: Boolean,
      default: false
    },
    /**
     * 12 of 24
     */
    half: {
      type: Boolean,
      default: false
    },
    /**
     * 8 of 24
     */
    oneThird: {
      type: Boolean,
      default: false
    },
    /**
     * 6 of 24
     */
    quarter: {
      type: Boolean,
      default: false
    },
    /**
     * custom 1-24
     */
    span: {
      type: Number
    }
  }
}

/**
 * v-model
 */
export const ModelMixin = {
  props: {
    /**
     * v-model
     */
    value: {}
  },
  model: {
    prop: 'value',
    event: 'change'
  }
}

/**
 * 表单内容
 */
export const FormItemMixin = {
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
    },
    /**
     * 组件被禁用时, 自动初始化值为undefined, 后续如果支持默认值, 则可能将值设置为默认值
     */
    clearWhenDisabled: {
      type: Boolean
    }
  },
  mixins: [ColSpanMixin, ModelMixin],
  provide() {
    return {
      formItemInstance: this
    }
  },
  /**
   * 从form二级组件传来的disabled值，来判断是否禁用
   */
  inject: {
    formInstance: {
      default: {}
    }
  },
  computed: {
    /**
     * 列宽
     * @return {number}
     */
    colSpan() {
      if (this.only) {
        return 24
      }
      if (this.half) {
        return 12
      }
      if (this.oneThird) {
        return 8
      }
      if (this.quarter) {
        return 6
      }
      if (this.span) {
        return this.span
      }
      if (this.formInstance.colSpan) {
        return this.formInstance.colSpan
      }
      return 6
    }
  },
  watch: {
    disabled: {
      immediate: true,
      handler(v) {
        if (this.clearWhenDisabled) {
          this.$emit('change', undefined)
        }
      }
    }
  },
  methods: {
    setCurrentValue(v) {
      this.$emit('change', v)
    }
  }
}
