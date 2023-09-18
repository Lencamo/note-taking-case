<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    子组件内容如下：
    <button @click="showVC">打印</button>
    <hello-world ref="hlw"></hello-world>
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
    showVC() {
      console.log(this.$refs.hlw)
      // 结果：VueComponent{...}  --- HelloWorld组件的vc
    }
  }
}
// })
</script>