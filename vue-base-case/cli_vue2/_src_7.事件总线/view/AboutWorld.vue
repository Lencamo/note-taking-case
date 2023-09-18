<template>
  <div class="home">
    <h3>AboutWorld组件内容</h3>
  </div>
</template>

<script>
export default {
  name: 'AboutWorld',
  mounted() {
    this.$bus.$on('homeToAbout', (val) => {
      console.log('我监听到你触发了$emit，我收到的数据为：\n', val)
    })
  },
  beforeDestroy() {
    this.$bus.$off('homeToAbout')
  }
}
</script>