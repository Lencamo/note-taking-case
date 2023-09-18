<template>
  <div class="home">
    <h3>AboutWorld组件内容</h3>

    初始值: {{ $store.state.count }}

    <br /><br />
    递增/减间隔：
    <select v-model="numb_select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>

    <br /><br />
    <button @click="upIfOdd">奇数时--> +1</button>
    <button @click="upAsync">延迟2秒--> +1</button>

    <br /><br />
    <button @click="UP">+1</button>
    <button @click="DOWN">-1</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'AboutWorld',
  data() {
    return {
      numb_select: 1
    }
  },
  methods: {
    ...mapActions(['up', 'down', 'upIfOdd', 'upAsync']),
    ...mapMutations(['UP', 'DOWN'])
  }
}
</script>