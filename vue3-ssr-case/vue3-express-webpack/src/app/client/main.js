import { createApp } from 'vue'

import App from '../../App.vue'

import createRouter from '../../router/index.js'
import { createWebHistory } from 'vue-router'

import { createPinia } from 'pinia'

// SPA
const app = createApp(App)

// pinia注册
const pinia = createPinia()
app.use(pinia)

// router注册
const router = createRouter(createWebHistory())
app.use(router)

app.mount('#app')
