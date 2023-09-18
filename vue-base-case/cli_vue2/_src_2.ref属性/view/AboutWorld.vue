<template>
  <div class="home">
    <h3>AboutWorld组件内容</h3>

    <span id="msg1">元素方法获取DOM </span>
    <button @click="showDOM1">打印1</button>
    <br /><br />
    <span ref="msg2">vue的ref属性获取DOM </span>
    <button @click="showDOM2">打印2</button>
  </div>
</template>

<script>
export default {
  name: 'AboutWorld',
  methods: {
    showDOM1() {
      console.log(document.querySelector('#msg1'))
      // 结果：<span id="msg1">元素方法获取DOM </span>
    },
    showDOM2() {
      console.log(this.$refs.msg2)
      // 结果：<span>vue的ref属性获取DOM </span>
    }
  }
}
</script>