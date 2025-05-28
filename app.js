const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Welcome to My App',
      count: 0
    }
  }
}).mount('#app')
