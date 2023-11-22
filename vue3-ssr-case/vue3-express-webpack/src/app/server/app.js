import { createSSRApp } from 'vue'

import App from '../../App.vue'

// 通过函数返回app实例：防止跨请求状态污染
export function createApp() {
  return createSSRApp(App)
}
