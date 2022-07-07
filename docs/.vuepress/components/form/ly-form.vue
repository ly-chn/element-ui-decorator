<template>
  <el-form ref="ruleForm"
           class="ly-form"
           :class="{'ly-form-search': searchForm}"
           :model="model"
           label-width="auto"
           label-position="left">
    <el-row :gutter="24">
      <div>
        <slot />
      </div>
      <el-col v-if="searchForm" :span="searchButtonColSpan" style="text-align: right; margin-bottom: 6px;">
        <el-button size="medium" icon="el-icon-search" type="primary">搜索</el-button>
        <el-button size="medium" plain icon="el-icon-refresh">重置</el-button>
      </el-col>
      <el-col :span="24" style="display: flex">
        <div class="ly-form-append-left-buttons" style="flex: 1">
          <slot name="left-buttons" />
        </div>
        <div class="ly-form-append-right-buttons">
          <slot name="right-buttons" />
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>

import {ColSpanMixin} from './mixins/form-item-mixin'

export default {
  name: 'LyForm',
  mixins: [ColSpanMixin],
  props: {
    /**
     * 表单数据对象
     */
    model: {
      type: Object
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean
    },
    /**
     * 为true表示为检索页, 超出时将自动显示折叠功能, 自动调整默认显示个数等功能支持
     */
    searchForm: {
      type: Boolean
    },
    /**
     * label最大宽度: px, 涉及自动计算对齐label宽度
     */
    maxLabelWidth: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      /**
       * null: 不显示, true: 展开, false: 折叠
       */
      expandStatus: null,
      searchButtonColSpan: 24
    }
  },
  computed: {
    /**
     * 栅格布局占用的列数
     * @return {number}
     */
    colSpan() {
      if (this.searchForm) {
        return 6
      }
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
      return 6
    },
    /**
     * 表单样式
     */
    formStyle() {
      if (this.expandStatus === null) {
        return {}
      }
      return {
        overflow: this.expandStatus ? '' : 'hidden',
        height: this.expandStatus ? '' : '50px'
      }
    }
  },
  watch: {
    $slots: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          let sum = 0
          for (const formItem of this.$slots.default) {
            sum += formItem?.componentInstance?.colSpan || 0
          }
          this.searchButtonColSpan = 24 - (sum % 24)
        })
      }
    }
  },
  mounted() {
    // 自动计算展开折叠功能
    this.resetSearchFormExpand()
  },
  methods: {
    /**
     * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
     */
    resetFields() {
      this.$refs.ruleForm.resetFields()
    },
    /**
     * 移除表单项的校验结果
     * @param {string | string[]} props 传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
     */
    clearValidate(props) {
      this.$refs.ruleForm.clearValidate(props)
    },
    /**
     * 对整个表单进行校验的方法, 返回一个Promise
     */
    validate() {
      return this.$refs.ruleForm.validate()
    },
    /**
     * 对部分表单字段进行校验的方法
     * @param {string | array} props 校验目标
     * @param {(errorMessage: string) => void} callback 回调
     */
    validateField(props, callback) {
      return this.$refs.ruleForm.validateField(props, callback)
    },
    /**
     * 为检索页时, 自动显示折叠按钮
     */
    resetSearchFormExpand() {
      // 待实现
    }
  },
  provide() {
    return {
      formInstance: this
    }
  }
}
</script>
