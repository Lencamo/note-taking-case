<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    减号----<button @click="decrement">CountF：{{ countF }}</button>

    <br /><br />
    子组件内容如下：
    <!-- <hello-world :count.sync="countF"></hello-world> -->
    <hello-world :count="countF" @update:count="countF = $event"></hello-world>
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
      countF: 0
    }
  },
  methods: {
    decrement() {
      this.countF--
    }
  }
}
// })
</script>