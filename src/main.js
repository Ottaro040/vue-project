import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.use(createPinia())

app.mount('#app')
