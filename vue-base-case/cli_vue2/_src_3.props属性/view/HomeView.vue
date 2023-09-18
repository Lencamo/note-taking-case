<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    子组件内容如下：
    <!-- :age 表示属性值为一个js表达式，此时20是一个number类型 -->
    <hello-world userName="lencamo" :age="20"></hello-world>
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
</script>