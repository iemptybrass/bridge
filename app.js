const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Bridge API Inspector',
      bridgeAvailable: typeof window.Bridge !== 'undefined',
      bridgeKeys: []
    }
  },
  mounted() {
    if (this.bridgeAvailable) {
      this.bridgeKeys = Object.keys(window.Bridge)
    }
  }
}).mount('#app')
