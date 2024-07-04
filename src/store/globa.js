import { defineStore } from "pinia";
export default defineStore("globa", {
  state: () => {
    return {
      navHeight: 0,
      safeArea: 0,
    }
  },
  actions: {
    setNavHeight(height) {
      this.navHeight = height
    },
    setSafeArea(num) {
      this.safeArea = num
    }
  }
})