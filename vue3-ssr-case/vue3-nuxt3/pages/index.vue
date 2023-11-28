<template>
  <div class="page-index">
    <div class="title">
      <h2>Nuxt Demo</h2>
    </div>
    <div class="demo">
      <element-plus></element-plus>
      <pinia-demo></pinia-demo>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    margin-top: 100px;
  }

  .demo {
    @extend .page-index;

    & > :nth-child(odd) {
      margin-bottom: 20px;
    }
  }
}
</style>
