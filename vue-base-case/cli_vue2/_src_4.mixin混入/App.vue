<template>
  <div>
    <home-view></home-view>
    <about-world></about-world>
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
  }
}
</script>