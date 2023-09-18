<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

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
  }
}
// })
</script>