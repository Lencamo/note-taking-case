<template>
  <div class="home">
    <h2>home</h2>

    <div class="pinia-vertify">
      <p>pinia-vertify</p>

      商品价格：{{ price }}
      <button @click="numAdd">数量+1</button>
      <button @click="numReduce">数量-1</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useHomeStore from '../../store/home.js'

const homeStore = useHomeStore()
const { price } = storeToRefs(homeStore)
const { numAdd, numReduce } = homeStore
</script>

<style scoped>
.home {
}
</style>
