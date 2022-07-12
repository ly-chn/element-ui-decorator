<script>
import { FormItem } from 'element-ui'

export default {
  name: 'ElFormItemExtends',
  extends: FormItem,
  props: {
    value: {}
  },
  computed:{
    fieldValue() {
      return this.value
    },
  },
  mounted() {
    // 组件内进行了判断prop存在情况
    if (!this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this]);

      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });

      this.addValidateEvents();
    }
  },
}
</script>
