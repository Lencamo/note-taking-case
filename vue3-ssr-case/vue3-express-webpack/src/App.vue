<template>
  <div class="App">
    <div class="head">
      <h2>App</h2>

      <div class="tabs">
        <router-link to="/home"><button>home页面</button></router-link>
        <router-link to="/demo"><button>demo页面</button></router-link>
        <router-link to="/about"><button>about页面</button></router-link>
      </div>
    </div>

    <div class="content">
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(1)
</script>

<style scoped>
.App {
}

.head {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
}

.content {
  margin: 30px auto;

  width: 600px;
  height: 500px;
  background-color: #f1f3f4;
}
</style>
