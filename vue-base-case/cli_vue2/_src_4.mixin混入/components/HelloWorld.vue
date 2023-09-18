<template>
  <div class="hello">
    <br />
    <button @click="showName">新增文章</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { alertWin } from '@/mixin.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '新增'
    }
  },
  mixins: [alertWin]
}
</script>