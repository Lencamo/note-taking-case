<template>
  <div class="hello">
    <br />
    checkbox框：
    <input type="checkbox" :checked="checked" @change="inputChange($event)" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    inputChange(event) {
      console.log(event.target.checked)
      this.$emit('change', event.target.checked)
    }
  }
}
</script>