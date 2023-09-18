<template>
  <div id="app">
    <h4>1、请求方式</h4>
    <button @click="btn_axios">发起跨域请求</button>

    <h4>2、服务器地址</h4>
    <p>express-代理服务器：http://localhost:8081/ren/data</p>
    <p>express-http服务器：http://localhost:6061/data</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods: {
    btn_axios() {
      // 向代理商✍8081发起数据请求
      axios.get('http://localhost:8082/ren/data').then((res) => {
        console.log(res.data)
      })
    }
  }
}
</script>

