<template>
  <div class="pinia-demo">
    <el-input-number v-model="counter" @change="counterAdd(1)" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import useCounterStore from '~/store/counter'

const counterStore = useCounterStore()
const { counter } = storeToRefs(counterStore)
const { counterAdd } = counterStore
</script>
