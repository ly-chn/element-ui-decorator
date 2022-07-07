<template>
  <div>
    <div class="demo-block">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock'
}
</script>

<style>
.demo-block {
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  transition: .2s;
}
</style>
