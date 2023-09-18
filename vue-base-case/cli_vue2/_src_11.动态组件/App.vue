<template>
  <div>
    <button @click="componentS = 'HomeView'">首页</button>
    <button @click="componentS = 'AboutWorld'">关于</button>

    <!-- 1、静态展示 -->
    <!-- 
      <home-view></home-view>
      <about-world></about-world> 
    -->

    <!-- 2、动态展示 -->
    <!--
      <div class="main">
        <component :is="componentS"></component>
      </div>
     -->

    <!-- 3、动态展示（保持组件状态） -->
    <!--
      <div class="main">
        <keep-alive>
          <component :is="componentS"></component>
        </keep-alive>
      </div>
    -->

    <!-- 4、动态展示（指定组件保持状态） -->
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