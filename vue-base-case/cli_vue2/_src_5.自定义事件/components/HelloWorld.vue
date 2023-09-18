<template>
  <div class="hello">
    <br />
    <button @click="sendHelloMsg1">向父组件传递数据：username</button>
    <br />
    <button @click="sendHelloMsg2">向父组件传递数据：location</button>
    <br />
    <button @click="unbind">解绑自定义事件</button>
    <ul>
      <li>姓名：{{ username }}</li>
      <li>地址：{{ location }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      username: 'lencamo',
      location: '中国'
    }
  },
  methods: {
    sendHelloMsg1() {
      this.$emit('getHelloMsgF1', this.username)
    },
    sendHelloMsg2() {
      this.$emit('getHelloMsgF2', this.location)
    },

    unbind() {
      // 解绑自定义事件
      this.$off('getHelloMsgF2')
      // this.$off(['getHelloMsgF1', 'getHelloMsgF2'])
    }
  }
}
</script>