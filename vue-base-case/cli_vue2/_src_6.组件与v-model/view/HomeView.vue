<template>
  <div class="home">
    <h3>HomeView组件内容</h3>
    <button @click="changeCb">改变子组件的checkbox状态</button>
    <br /><br />

    子组件内容如下：
    <!-- <hello-world v-model="checkedF"></hello-world> -->
    <hello-world :checked="checkedF" @change="checkedF = $event" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      checkedF: true
    }
  },
  methods: {
    changeCb() {
      this.checkedF = !this.checkedF
    }
  }
}
</script>