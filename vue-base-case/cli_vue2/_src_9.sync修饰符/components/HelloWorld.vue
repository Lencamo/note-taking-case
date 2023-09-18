<template>
  <div class="hello">
    <br />
    加号----<button @click="increment">CountS：{{ count }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    count: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increment() {
      // 触发 update:count 事件，将 count 增加 1
      this.$emit('update:count', this.count + 1)
    }
  }
}
</script>