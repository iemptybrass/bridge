const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Launch Android Settings'
    }
  },
  methods: {
    launchApp() {
      const a = document.createElement('a')
      a.href = 'intent://#Intent;package=com.android.settings;end'
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
}).mount('#app')
