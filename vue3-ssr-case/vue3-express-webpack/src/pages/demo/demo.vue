<template>
  <div class="demo">
    <h2>demo</h2>

    <div class="hydration-vertify">
      <p>hydration-vertify</p>

      动态数字：{{ count }}
      <button @click="count++">+1</button>
      <button @click="count--">-1</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

<style scoped>
.demo {
}
</style>
