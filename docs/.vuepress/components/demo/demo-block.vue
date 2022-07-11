<template>
  <div class="demo-block">
    <!--效果展示-->
    <div class="code-result">
      <slot />
    </div>
    <div class="operations">
      <img alt="code" v-if="codeExpand" @click="codeExpand = !codeExpand" src="./assert/unexpand.svg">
      <img alt="code" v-else @click="codeExpand = !codeExpand" src="./assert/expand.svg">
    </div>
    <!--源码-->

    <div class="source-code">
      <el-collapse-transition>
        <slot name="code" v-if="codeExpand"/>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  data() {
    return {
      codeExpand: false
    }
  },
}
</script>

<style scoped>
.demo-block {
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: 1px solid #ebebeb;
}

.code-result {
  padding: 24px;
  border-bottom: 1px solid #ebebeb;
}

.operations {
  padding: 12px;
  text-align: center;
}

.language-vue {
  border: none;
  background-color: unset;
}

.operations > img {
  width: 16px;
  height: 16px;
}
</style>
