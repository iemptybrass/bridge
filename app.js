const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Launch Android App'
    }
  },
  methods: {
    launchApp() {
      // Opens Android Settings via intent URI
      window.location.href = "intent://#Intent;package=com.android.settings;end";
    }
  }
}).mount('#app')
