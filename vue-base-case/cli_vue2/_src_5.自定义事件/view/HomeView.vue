<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    子组件内容如下：

    <hello-world v-on:getHelloMsgF1="getHelloMsg1" v-on:getHelloMsgF2="getHelloMsg2"></hello-world>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    getHelloMsg1(val) {
      console.log('父组件收到了子组件传来的username:', val)
    },
    getHelloMsg2(val) {
      console.log('父组件收到了子组件传来的消息location:', val)
    }
  }
}
</script>
    