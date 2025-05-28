const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Launch App',
      count: 0, // <-- You must define this
      appPackage: 'com.android.settings'
    }
  },
  methods: {
    launchApp() {
      window.location.href = `bridge://launch?package=${this.appPackage}`
    }
  }
}).mount('#app')
