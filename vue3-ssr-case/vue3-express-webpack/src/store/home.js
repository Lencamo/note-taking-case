import { defineStore } from 'pinia'

const useHomeStore = defineStore('Home', {
  state: () => ({
    price: 99
  }),
  getters: {
    //
  },
  actions: {
    numAdd() {
      this.price = this.price + 99
    },
    numReduce() {
      this.price = this.price - 99
    }
  }
})

export default useHomeStore
