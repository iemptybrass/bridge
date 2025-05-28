const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Bridge Launcher JS Interface Check',
      windowKeys: []
    }
  },
  mounted() {
    this.windowKeys = Object.keys(window)
  }
}).mount('#app')
 