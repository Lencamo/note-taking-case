<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    <button @click="sendMsg">向AboutWorld表白</button>
    <br /><br />

    子组件内容如下：
    <hello-world></hello-world>
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
      interact: '你可以教我包饺子吗？我有点笨，做什么都容易露馅，喜欢你也是~'
    }
  },
  methods: {
    sendMsg() {
      this.$bus.$emit('homeToAbout', this.interact)
    }
  }
}
</script>