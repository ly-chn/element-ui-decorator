<template>
  <ly-form-item>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :before-remove="beforeRemove"
      :multiple="limit > 1"
      :disabled="disabled"
      :limit="limit"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" plain type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </ly-form-item>

</template>

<script>
import { FormItemMixin } from '../mixins/form-item-mixin'

export default {
  name: 'ly-upload',
  mixins: [FormItemMixin],
  data() {
    return {
      fileList: undefined
    }
  },
  props: {
    /**
     * 关联业务id
     */
    relationId: {
      type: [String, Number],
      required: true
    },
    /**
     *  最大允许上传个数, 大于1则允许多选
     */
    limit: {
      type: Number
    }
  },
  methods: {
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 [${ file.name }] 吗？`);
    }
  },
}
</script>
