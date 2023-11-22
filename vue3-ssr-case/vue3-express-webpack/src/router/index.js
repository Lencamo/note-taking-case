import { createRouter } from 'vue-router'

// 通过函数返回router实例：防止跨请求状态污染
export default function (historyMode) {
  return createRouter({
    history: historyMode,
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import('../pages/home/home.vue')
      },
      {
        path: '/demo',
        component: () => import('../pages/demo/demo.vue')
      },
      {
        path: '/about',
        component: () => import('../pages/about/about.vue')
      }
    ]
  })
}
