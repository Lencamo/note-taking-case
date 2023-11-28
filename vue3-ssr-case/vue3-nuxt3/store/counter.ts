import { defineStore } from 'pinia'

const useCounterStore = defineStore('Counter', {
  state: () => ({
    counter: 1
  }),
  getters: {
    //
  },
  actions: {
    counterAdd(num: number) {
      this.counter = this.counter + num
    }
  }
})

export default useCounterStore
