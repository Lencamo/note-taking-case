<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    <div class="content">
      <!-- 跳转控制区域 -->
      <ul class="nav">
        <li>
          <router-link active-class="active" to="/part1?title=part1">part1</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/part2">part2</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/part3">part3</router-link>
        </li>
      </ul>

      <!-- 页面展示区 -->
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeShow' // 父组件中的exclude属性👀不会生效
}
</script>

<style scoped>
.active {
  display: inline-block;
  background: #1f9fff;
}
.content {
  width: 500px;
  border: 1px solid black;
  display: flex;
}
.nav {
  max-width: 100px;
  list-style-type: none;
  padding: 0px 20px;
}

.main {
  border-left: 1px solid black;
  padding-left: 10px;
}
</style>