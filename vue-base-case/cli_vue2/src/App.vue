<template>
  <div>
    <button @click="componentS = 'HomeView'">首页</button>
    <button @click="componentS = 'AboutWorld'">关于</button>

    <!-- 动态展示（指定组件保持状态） -->
    <div class="main">
      <keep-alive exclude="HomeView">
        <component :is="componentS"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HomeView from './view/HomeView'
import AboutWorld from './view/AboutWorld'

export default {
  name: 'App',
  components: {
    HomeView,
    AboutWorld
  },
  data() {
    return {
      componentS: 'HomeView'
    }
  }
}
</script>