import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/part1'
    },
    {
      path: '/part1',
      component: () => import('../page/PartOne')
    },
    {
      path: '/part2',
      component: () => import('../page/PartTwo')
    },
    {
      path: '/part3',
      component: () => import('../page/PartThree')
    }
  ]
})
