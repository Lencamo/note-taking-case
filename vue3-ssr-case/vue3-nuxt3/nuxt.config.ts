// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
  css: ['~/assets/scss/index.scss'],

  // element主题/暗色样式
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`
        }
      }
    }
  },
  elementPlus: {
    importStyle: 'scss',
    themes: ['dark']
  }
})
