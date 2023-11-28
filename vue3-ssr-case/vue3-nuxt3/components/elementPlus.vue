<template>
  <div class="element-plus">
    <el-button type="primary" @click="helloSuccess">Primary</el-button>
    <el-button type="success" @click="helloSuccess">success</el-button>
    <br />
    <div style="text-align: center">
      <el-switch
        v-model="colorMode"
        inline-prompt
        active-text="dark"
        inactive-text="light"
        size="large"
      ></el-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
const helloSuccess = () => ElMessage.info('hello world')

const mode = useColorMode()
const colorMode = computed<boolean>({
  get: () => mode.value === 'dark',
  set: () => (mode.value = mode.value === 'dark' ? 'light' : 'dark')
})
</script>
