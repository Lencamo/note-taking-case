<template>
  <Transition name="dialog">
    <div v-if="show" class="dialog-mask">
      <div class="dialog-container">
        <button @click="$emit('close')">OK</button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style>
.dialog-mask {
  z-index: 999;
  width: 600px;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-container {
  width: 30px;
  padding: 20px;
  background-color: #fff;
}
</style>