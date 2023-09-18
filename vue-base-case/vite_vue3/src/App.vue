<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <Demo :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </Demo>
  </Teleport>
</template>

<script>
import Demo from './components/Demo.vue'
import { ref } from 'vue'

export default {
  components: {
    Demo
  },
  setup() {
    const showModal = ref(false)

    return { showModal }
  }
}
</script>

