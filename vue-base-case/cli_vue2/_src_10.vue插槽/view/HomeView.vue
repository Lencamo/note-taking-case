<template>
  <div class="home">
    <h3>HomeView组件内容</h3>

    子组件内容如下：
    <hello-world>
      <!-- 方式1 -->
      <!-- <template #title="slotPropsObj">
        {{ slotPropsObj.dataS }}
        <div v-for="(item, index) in slotPropsObj.dataS" :key="index">
          <h3>{{ item.title }}</h3>
          <ul v-for="(i, idx) in item.lis" :key="idx">
            <li>{{ i }}</li>
          </ul>
        </div>
      </template> -->

      <!-- 方式2 -->
      <template slot="title" slot-scope="{ dataS }">
        <!-- {{ slotPropsObj.dataS }} -->
        <div v-for="(item, index) in dataS" :key="index">
          <h3>{{ item.title }}</h3>
          <ul v-for="(i, idx) in item.lis" :key="idx">
            <li>{{ i }}</li>
          </ul>
        </div>
      </template>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
// })
</script>