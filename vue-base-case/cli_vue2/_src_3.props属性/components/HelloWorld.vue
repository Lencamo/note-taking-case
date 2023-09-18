<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <ul>
      <li>姓名：{{ userName }}</li>
      <li>
        年龄：{{ myAge }}
        <button @click="add">加1</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Son component！',
      myAge: this.age
    }
  },
  props: ['userName', 'age'],
  methods: {
    add() {
      this.myAge++
    }
  }
}
</script>