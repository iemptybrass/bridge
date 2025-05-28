const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Launch Settings',
      appPackage: 'com.android.settings'
    }
  },
  methods: {
    launchApp() {
      window.location.href = `bridge://launch?package=${this.appPackage}`
    }
  }
}).mount('#app')
