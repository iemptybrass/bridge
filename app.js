const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Launch Settings App',
      packageName: 'com.android.settings'
    }
  },
  methods: {
    launchApp() {
      if (window.Bridge && typeof window.Bridge.requestLaunchApp === 'function') {
        window.Bridge.requestLaunchApp(this.packageName)
      } else {
        alert("Bridge API not available")
      }
    }
  }
}).mount('#app')
