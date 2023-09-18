<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    <div class="content">
      <ul class="nav">
        <li @click="componentS = 'PartOne'">part1</li>
        <li @click="componentS = 'PartTwo'">part2</li>
        <li @click="componentS = 'PartThree'">part3</li>
      </ul>
      <div class="main">
        <keep-alive>
          <component :is="componentS"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import PartOne from '@/components/PartOne.vue'
import PartTwo from '@/components/PartTwo.vue'
import PartThree from '@/components/PartThree.vue'

export default {
  name: 'HomeShow', // 父组件中的exclude属性不会生效
  components: {
    PartOne,
    PartTwo,
    PartThree
  },
  data() {
    return {
      componentS: 'PartOne'
    }
  }
}
</script>

<style scoped>
.content {
  width: 500px;
  border: 1px solid black;
  display: flex;
}
.nav {
  max-width: 100px;
  list-style-type: none;
  padding: 0px 20px;
}

.main {
  border-left: 1px solid black;
  padding-left: 10px;
}
</style>