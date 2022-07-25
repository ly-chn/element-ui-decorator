# 快速开始

[[toc]]

## 这里是element-ui官网的一个demo

[demo地址](https://element.eleme.cn/#/zh-CN/component/form#dian-xing-biao-dan)

::: demo
```vue
<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
```
:::

如果正式项目中按照demo进行开发, 会遇到以下问题: 

1. 任何表单组件都需要使用 `<el-form-item>` 组件包裹造成代码冗余

2. `el-form-item` 组件的prop属性每次都要填写, 而且和表单组件(input/select)处也要填写(v-model处)

3. 项目中几乎所有 `input` 组件都要添加 `autocomplete="off"` 属性

4. rule与表单项距离过远, 不易维护

5. 有些项目管理者不习惯使用回调, 表单校验的回调形式调用可能不讨喜

6. 同步的表单校验几乎每次都要写 `trigger: 'blur'` (其实我更推荐change)

   原因: 有人觉得比如手机号校验, change会直接保存, 但是如果报错了, blur事件很难更快提醒用户`已经完成输入`, 场景不同, 使用的不同, 但是宽泛来说我更推荐change, 所以示例中也是大量使用change事件

7. 不同页面之间的rule(校验规则)复用性较低
