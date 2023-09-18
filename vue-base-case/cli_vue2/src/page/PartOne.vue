<template>
  <div>
    <h4>{{ $route.query.title }}</h4>
    <p>开辟鸿蒙，谁为情种？都只为风月情浓。趁着这奈何天，伤怀日，寂寥时，试遣愚衷。因此上，演出这怀金悼玉的《红楼梦》。</p>
  </div>
</template>

<script>
export default {
  name: 'PartOne',
  mounted() {
    console.log('PartOne组件的vc', this)

    window.oneRouter = this.$router
  }
}
</script>

<style scoped>
p {
  background-color: skyblue;
}
</style>